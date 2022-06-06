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
            // function from codeply.com
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
        .then(() => $(".slide-img").on("click", (e) => {
                let movieID = e.target.id;
                let settings = {
                    method: "GET",
                }
                fetch(`${movieIdURL}${movieID}&apikey=${OMDB_API_KEY}`, settings)
                    .then(res => res.json())
                    .then(res => {
                        let movie = {
                            Title: res.Title,
                            Genre: res.Genre,
                            Plot: res.Plot,
                            Actors: res.Actors,
                            Director: res.Director,
                            imdbID: res.imdbID,
                            id: res.id,
                        }
                        console.log(movie);
                        $("#modal-container").html(mapMovieInfo(movie))
                    })
            })
        )
}

loadPage();

// Search for a movie/add a movie
document.getElementById("submit").addEventListener("click", () => {
    let title = $("#search-bar").val();
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

// Delete a movie
$("body").on("click", ".remove-button", (event) => {
    let settings = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(glitchURL + event.target.getAttribute("data-id"), settings)
        .then(() => loadPage());
});

// Generate an edit movie form
$("body").on("click", ".edit-button", (event) => {
    let movieID = event.target.getAttribute("data-id");
    fetch(glitchURL + movieID, fetchSettings)
        .then(res => res.json())
        .then(res => {
            $("#edit-form").html(mapEditMovie(res))
            console.log(res);
            console.log(mapEditMovie(res));
            console.log($("#title").val());
            $("#update-movie").on("click", updateMovieInfo);
        });
});

// Update movie info
function updateMovieInfo(event) {
    event.preventDefault();
    const movie = {
        Title: $("#title").val(),
        imdbRating: $("#imdbRating").val(),
        Genre: $("#genre").val(),
        Director: $("#director").val(),
        Plot: $("#plot").val(),
        imdbID: $("#imdbID").val(),
        id: $("#id").val()
    }
    $("#edit-form").html("");
    let settings = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    }
    fetch(glitchURL + movie.id, settings)
        .then(movie => movie.json());
    loadPage();
}

// Clicking the logo reloads the movie html
$("#logo-img").on("click", () => {
    loadPage();
});

// TODO html format