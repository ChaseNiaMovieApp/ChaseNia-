import {mapMovies, removeMovie} from "./maps.js";
import {OMDB_API_KEY} from "./keys.js";
import {titleURL, fetchSettings} from "./constants.js";

const glitchURL = "https://exclusive-radical-peak.glitch.me/movies/";


//1. get all the items
// - > fetch request
// then -> convert to json object to handle
// find the missing titles to delete
function loadPage () {
    document.getElementById("movies").innerHTML = "LOADING..."
    fetch(glitchURL, fetchSettings)
        .then(res =>
            res.json())
        .then(res => { // array of movies
            document.getElementById("movies").innerHTML = ""
            res.map(removeMovie).forEach(function (movie) {
                $("#movies").append(movie);
            });
        });
}
loadPage()
// Search for a movie
document.getElementById("submit").addEventListener("click", function () {
    let title = $("#search-bar").val()
    console.log(title);
    fetch(`${titleURL}${title}&apikey=${OMDB_API_KEY}`)
        .then(res =>
            res.json())
        .then(res => { // array of movies
            console.log(res)
            document.getElementById("movies").innerHTML = mapMovies(res)
            $("#add-button").on("click", function(){
                let settings = {
                    ...fetchSettings,
                    method: "POST",
                    body: JSON.stringify(res)
                }
                console.log(settings);
                fetch(glitchURL, settings)
                    .then(res => res.json())
                    .then(res => loadPage())

            })
        })
});
$("body").on("click", ".remove-button", function (event){
        let settings = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
        fetch (glitchURL + event.target.getAttribute("data-id"), settings)
            .then(res => loadPage())

});
$("body").on("click", ".edit-button", function (event){

    let settings = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"}
        // body:
    }
    fetch (glitchURL + event.target.getAttribute("data-id"), settings)
        .then(res => loadPage())

});

// TODO delete posts

// TODO add posts

// TODO html format