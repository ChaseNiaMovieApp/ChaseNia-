import {imgURL} from "./constants.js";
import {OMDB_API_KEY} from "./keys.js";

export const mapAddMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `
<div class="d-flex justify-content-center">
    <div class="card slide-img" style="width: 300px">
        <img src="${imgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster" id="${imdbID}">
        <button class="orange-btn py-3 mt-1" id="add-button">Add Movie</button>
    </div>
</div>
`
};

export const mapPopulateActiveMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `
<div class="carousel-item active">
    <div class="col-md-3">
        <div class="">
            <div class="">
                <img class="slide-img" src="${imgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster image" id="${imdbID}">
            </div>
        </div>
    </div>
</div>
`
}

export const mapPopulateMovies = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `
<div class="carousel-item">
    <div class="col-md-3">
        <div class="">
            <div class="">
                <img class="slide-img" src="${imgURL}${imdbID}&apikey=${OMDB_API_KEY}" alt="movie poster image" id="${imdbID}">
            </div>
        </div>
    </div>
</div>
`
};

export const editMovie = ({Title, imdbRating, Genre, Director, Plot, imdbID, id}) => {
    return `
<div class="card" style="width: 80%">
    <label for="Title">Title</label><input class="" id="title" type="text" value="${Title}">
    <label for="imdBRating">imdBRating</label><input id="imdbRating" type="text" value="${imdbRating}">
    <label for="Genre">Genre</label><input id="genre" type="text" value="${Genre}">
    <label for="Director">Director</label><input id="director" type="text" value="${Director}">
    <label for="Plot"></label>Plot<textarea id="plot">${Plot}</textarea>
    <label for="imdbID"></label><input id="imdbID" type="hidden" value="${imdbID}">
    <label for="id"></label><input id="id" type="hidden" value="${id}">
    <button class="orange-btn" id="update-movie">Submit</button>
</div>
`
};

// TODO from mapAddMovie function, need to use this information for an
// TODO img click event that pumps this, as a modal, into the html, when adding a movie

//     <div className="card-body">
//         <h3 className="card-title">${Title}</h3>
//         <p className="card-text">${Plot}</p>
//     </div>
//     <ul className="list-group list-group-flush">
//         <li className="list-group-item">${Genre}</li>
//         <li className="list-group-item">${imdbRating}</li>
//         <li className="list-group-item">${Director}</li>
//     </ul>

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