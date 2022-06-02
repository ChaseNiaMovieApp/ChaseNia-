import {imgURL} from "./constants.js";
import {OMDB_API_KEY} from "./keys.js";

export const mapMovies = ({Title, imdbRating, Genre, Director, Plot, imdbID}) => {
    return `<div class="card" style="width:400px"> 
    <img class="card-img-top" src="${imgURL}${imdbID}&apikey=${OMDB_API_KEY}">
    <div class="card-body">
    <h3 class="card-title">${Title}</h3>
    <p class="card-text">${Plot}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${Genre}</li>
    <li class="list-group-item">${imdbRating}</li>
    <li class="list-group-item">${Director}</li>
    </ul>
    <button id="add-button">Add</button>
</div>`
};
