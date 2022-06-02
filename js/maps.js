import {imgURL} from "./constants.js";
import {OMDB_API_KEY} from "./keys.js";

export const mapMovies = ({Title, imdbRating, Genre, Director, Plot, imdbID}) => {
    return `<div class="card" style="width:300px"> 
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

export const removeMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID,id}) => {
    return `<div class="card" style="width:300px"> 
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
    <button class="remove-button" data-id="${id}">Remove</button>
    <button class="edit-button" data-id="${id}">Edit</button>
</div>`
};


export const editMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID,id}) => {
    return `<label htmlFor="Title">Title</label><input type="text">
        <label htmlFor="imdBRating">imdBRating</label><input type="text">
        <label htmlFor="Genre">Genre</label><input type="text">
        <label htmlFor="Director">Director</label><input type="text">
        <label htmlFor="Plot"></label>Plot<input type="text">
        <label htmlFor="imdbID"></label><input type="hidden">
        <label htmlFor="id"></label><input type="hidden">
        <button id="edit-button">Submit</button>
    `}