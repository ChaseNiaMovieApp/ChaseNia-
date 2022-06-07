import {movieImgURL} from "./constants.js";
import {OMDB_API_KEY} from "./keys.js";

export const mapAddMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `
<div class="d-flex justify-content-center">
    <div class="card slide-img" style="width: 300px; background-color: black;">
        <img src="${movieImgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster" id="${imdbID}" style="border-radius: 5px">
        <button class="orange-btn py-3 mt-1" id="add-button">Add Movie</button>
    </div>
</div>
`
};

export const mapPopulateActiveMovie = ({imdbID}) => {
    return `
<div class="carousel-item active">
    <div class="col-md-3">
        <div class="">
            <div class="">
                <img class="slide-img" src="${movieImgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster image" id="${imdbID}">
            </div>
        </div>
    </div>
</div>
`
}

export const mapPopulateMovies = ({imdbID}) => {
    return `
<div class="carousel-item">
    <div class="col-md-3">
        <div class="">
            <div class="">
                <img class="slide-img" src="${movieImgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster image" id="${imdbID}">
            </div>
        </div>
    </div>
</div>
`
};

// export const mapMovieInfo = ()

export const mapEditMovie = ({Title, Genre, Director, Plot, Actors}) => {
    return `
    <div class="modal-wrapper container">
        <label for="movie-title"></label>
        <input type="text" id="movie-title" value="${Title}">
            <label for="movie-plot"></label>
            <input type="text" id="movie-plot" value="${Plot}">
            <label for="movie-actors"></label>
            <input type="text" id="movie-actors" value="${Actors}">
            <label for="movie-director"></label>
            <input type="text" id="movie-director" value="${Director}">
            <label for="movie-genre"></label>
            <input type="text" id="movie-genre" value="${Genre}">
        <div class="info-button-wrapper">
            <button class="info-button edit-save">Save</button>
            <button class="info-button edit-cancel">Cancel</button>
        </div>
    </div>
`
};

// TODO from mapAddMovie function, need to use this information for an
// TODO img click event that pumps this, as a modal, into the html, when adding a movie

export const mapMovieInfo = ({Title, Genre, Director, Plot, id, Actors}) => {
    return `
<div class="modal-wrapper container">
        <span class="movie-modal-title">${Title}</span>
        <p class="movie-modal-body">
            <span>${Plot}<br></span>
            <span>Featuring: ${Actors}<br></span>
            <span>Director: ${Director}<br></span>
            <span>${Genre}<br></span>
            <label for="id"></label><input id="id" type="hidden" value="${id}">
        </p>
        <div class="info-button-wrapper">
            <button class="info-button info-close">Close</button>
            <button class="info-button info-edit">Edit</button>
            <button class="info-button info-delete">Delete</button>
        </div>
</div>
`
}

// TODO from mapPopulateMovies function, need to use this information for an
// TODO img click event that pumps this, as a modal, into the html to view more info
// TODO of existing movies
// <div className="card-body">
//     <h3 className="card-title">${Title}</h3>
//     <p className="card-text">${Plot}</p>
// </div>
// <ul className="list-group list-group-flush">
//     <li className="list-group-item">${Genre}</li>
//     <li className="list-group-item">${imdbRating}</li>
//     <li className="list-group-item">${Director}</li>
// </ul>
// <div className="d-flex col justify-content-evenly align-items-end">
//     <button style="width: 100px; height: 30px;" className="orange-btn remove-button btn btn-sm" data-id="${id}">Remove
//     </button>
//     <button style="width: 100px; height: 30px;" className="orange-btn edit-button btn btn-sm" data-id="${id}"
//             data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit
//     </button>
// </div>