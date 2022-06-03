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

export const removeMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
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

export const editMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `<label For="Title">Title</label><input id="title" type="text" value="${Title}">
        <label For="imdBRating">imdBRating</label><input id="imdbRating" type="text" value="${imdbRating}">
        <label For="Genre">Genre</label><input id="genre" type="text"  value="${Genre}">
        <label For="Director">Director</label><input id="director" type="text" value="${Director}">
        <label For="Plot"></label>Plot<input id="plot" type="text" value="${Plot}">
        <label For="imdbID"></label><input id="imdbID" type="hidden" value="${imdbID}">
        <label For="id"></label><input id="id" type="hidden" value="${id}">
        <button id="update-movie">Submit</button>`
};