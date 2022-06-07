import {mapAddMovie, mapPopulateMovies, mapPopulateActiveMovie, mapEditMovie, mapMovieInfo} from "./maps.js";
import {OMDB_API_KEY} from "./keys.js";
import {movieIdURL, movieTitleURL, fetchSettings} from "./constants.js";

const glitchURL = "https://exclusive-radical-peak.glitch.me/movies/";


function loadPage() {
    document.querySelector(".carousel-inner").innerHTML = "LOADING...";
    fetch(glitchURL, fetchSettings)
        .then(res => res.json())
        .then(res => {
            document.querySelector(".carousel-inner").innerHTML = "";
            res.forEach((movie) => {
                if (res[0] === movie) {
                    movie = mapPopulateActiveMovie(movie);
                    $(".carousel-inner").append(movie);
                } else {
                    movie = mapPopulateMovies(movie);
                    $(".carousel-inner").append(movie);
                }
            })
        })
        .then(() => {
            // Function found on codeply.com, provides the functionality of the carousel buttons and autoscroll
            let items = document.querySelectorAll('.carousel .carousel-item');

            items.forEach((el) => {
                const minPerSlide = 4;
                let next = el.nextElementSibling;
                for (let i = 1; i < minPerSlide; i++) {
                    if (!next) {
                        // wrap carousel by using first child
                        next = items[0]
                    }
                    let cloneChild = next.cloneNode(true);
                    el.appendChild(cloneChild.children[0]);
                    next = next.nextElementSibling;
                }
            })
        })
        // Allows images to be used as clickable buttons, retrieve movie information
        .then(() => $(".slide-img").on("click", (e) => {
                let currentMovie = e.target.id;
                let settings = {
                    method: "GET",
                }
                // Collects the stored movie ID from our site
                fetch(`${glitchURL}`, settings)
                    .then(res => res.json())
                    .then(res => {
                        res.forEach(movie => {
                            if (currentMovie === movie.imdbID) {
                                currentMovie = movie
                            }
                        })
                    })
                    .then(() => {
                            // Outputs the selected movie information in the form of a modal
                            $("#modal-container").html(mapMovieInfo(currentMovie));
                            // Closes the information modal for the selected movie
                            $(".info-close").on("click", () => {
                                $("#modal-container").html("");
                            });
                            // Deletes the selected movie from the site
                            $(".info-delete").on("click", () => {
                                $("#modal-container").html("");
                                let settings = {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
                                fetch(glitchURL + currentMovie.id, settings)
                                    .then((res) => loadPage());
                            });
                            //  Allows the editing of the selected movie's information
                            $(".info-edit").on("click", () => {
                                $("#modal-container").html(mapEditMovie(currentMovie));
                                // Cancels any edits to the selected movie
                                $(".edit-cancel").on("click", () => {
                                    $("#modal-container").html("");
                                });
                                // Saves edits to the selected movie
                                $(".edit-save").on("click", () => {
                                    updateMovieInfo(currentMovie);
                                    $("#modal-container").html("");
                                });
                            });
                        }
                    )
            })
        )
}

loadPage();

// Search for a movie/add a movie
document.getElementById("submit").addEventListener("click", () => {
    let title = $("#search-bar").val();
    $("#search-bar").val("");
    fetch(`${movieTitleURL}${title}&apikey=${OMDB_API_KEY}`)
        .then(res =>
            res.json())
        .then(res => {
            document.querySelector(".carousel-inner").innerHTML = mapAddMovie(res)
            $("#add-button").on("click", () => {
                let settings = {
                    ...fetchSettings,
                    method: "POST",
                    body: JSON.stringify(res)
                }
                fetch(glitchURL, settings)
                    .then(() => loadPage())
            });
        });
});

// Update movie info
function updateMovieInfo(input) {
    let settings = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Title": $("#movie-title").val(),
            "Plot": $("#movie-plot").val(),
            "Actors": $("#movie-actors").val(),
            "Director": $("#movie-director").val(),
            "Genre": $("#movie-genre").val(),
        })
    }
    fetch(glitchURL + input.id, settings)
        .then(res => res.json())
        .then(json => console.log(json))
    loadPage();
}

// Clicking the logo reloads the movies' html elements
$("#logo-img").on("click", () => {
    loadPage();
});


// TODO html format