export const mapMovies = ({title, rating, genre, director, plot, id}) => {
    return `<div class="card" style="width:200px"> 
    <img class="card-img-top" src="">
    <div class="card-body" >
    <h3 class="card-title">${title}</h3>
    <p class="card-text">${plot}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${genre}</li>
    <li class="list-group-item">${rating}</li>
    <li class="list-group-item">${director}</li>
    <li class="list-group-item">${id}</li>
    </ul>

</div>`
};
