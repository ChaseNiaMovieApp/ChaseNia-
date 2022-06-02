import {mapMovies} from "./maps.js";
import {OMDB_API_KEY} from "./keys.js";
import {titleURL, fetchSettings} from "./constants.js";

const glitchURL = "https://exclusive-radical-peak.glitch.me/movies/";


//1. get all the items
// - > fetch request
// then -> convert to json object to handle
// find the missing titles to delete
document.getElementById("movies").innerHTML = "LOADING..."
fetch(glitchURL, fetchSettings)
    .then(res =>
        res.json())
    .then(res => { // array of movies
        console.log(res)
        document.getElementById("movies").innerHTML = ""
        res.map(mapMovies).forEach(function(movie){
            $("#movies").append(movie);
            console.log(movie);
        });
    });

// Search for a movie
document.getElementById("submit").addEventListener("click", function () {
    let title = $("#search-bar").val()
    console.log(title);
    fetch(`${titleURL}${title}&apikey=${OMDB_API_KEY}`, fetchSettings)
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
                fetch(glitchURL, settings)
                    .then(res => res.json())
                    .then(res => console.log(res))
            })
        }).then(res => console.log(res))
});


// TODO delete posts

// TODO add posts

// TODO html format