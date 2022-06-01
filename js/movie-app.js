import {mapMovies} from "./maps.js";

const baseURL = "https://exclusive-radical-peak.glitch.me/movies/";

//1. get all the items
// - > fetch request
// then -> convert to json object to handle
// find the missing titles to delete
document.getElementById("movies").innerHTML = "LOADING..."
fetch(baseURL)
    .then(res =>
        res.json())
    .then(res => { // array of movies
        console.log(res)
        document.getElementById("movies").innerHTML = res.map(mapMovies)
        //
        // // Loop removes unwanted objects on page load
        // for (let i = 0; i < res.length; i++) {
        //     console.log(res[i]);
        //     let settings = {
        //         method: "DELETE"
        //     }
        //     if (res[i].title === "" || res[i].title === "1" || res[i].title === 1 || res[i].title === "hello" || res[i].title === undefined) {
        //         fetch(baseURL + res[i].id, settings)
        //     }
        //     if (res[i].id === 283 || res[i].id === 284) {
        //         fetch(baseURL + res[i].id, settings)
        //     }
        // }
    })
    // .then(() => document.getElementById("movies").innerHTML = "");

// TODO delete posts

// TODO add posts

// TODO html format