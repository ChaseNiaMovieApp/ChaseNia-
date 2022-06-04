import {mapAddMovie, mapPopulateMovies, editMovie} from "./maps.js";
import {OMDB_API_KEY} from "./keys.js";
import {titleURL, fetchSettings} from "./constants.js";

const glitchURL = "https://exclusive-radical-peak.glitch.me/movies/";

let slider = tns({
    container: ".my-slider",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1,
        }
    }
})

function loadPage() {
    document.getElementById("movies").innerHTML = "LOADING...";
    fetch(glitchURL, fetchSettings)
        .then(res =>
            res.json())
        .then(res => { // array of movies
            document.getElementById("movies").innerHTML = "";
            res.map(mapPopulateMovies).forEach(function (movie) {
                console.log(movie);
                $("#movies").append(movie);
            });
        });
}

loadPage();

// Search for a movie/add a movie
document.getElementById("submit").addEventListener("click", function () {
    let title = $("#search-bar").val();
    console.log(title);
    fetch(`${titleURL}${title}&apikey=${OMDB_API_KEY}`)
        .then(res =>
            res.json())
        .then(res => {
            document.getElementById("movies").innerHTML = mapAddMovie(res)
            $("#add-button").on("click", function () {
                let settings = {
                    ...fetchSettings,
                    method: "POST",
                    body: JSON.stringify(res)
                }
                fetch(glitchURL, settings)
                    .then(res => res.json())
                    .then(res => loadPage())
            });
        });
});

// Delete a movie
$("body").on("click", ".remove-button", function (event) {
    let settings = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(glitchURL + event.target.getAttribute("data-id"), settings)
        .then(res => loadPage());
});

// Generate an edit movie form
$("body").on("click", ".edit-button", function (event) {
    let movieID = event.target.getAttribute("data-id");
    fetch(glitchURL + movieID, fetchSettings)
        .then(res => res.json())
        .then(res => {
            $("#edit-form").html(editMovie(res))
            console.log(res);
            console.log(editMovie(res));
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

$("#logo-img").on('click', function (){
    loadPage();
})

// TODO html format