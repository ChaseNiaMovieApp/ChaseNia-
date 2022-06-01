const baseURL = "https://exclusive-radical-peak.glitch.me/movies/";

//1. get all the itmes
// - > fetch request
// then -> convert to jsopn object to handle
// find tthe missing titles to delete

fetch(baseURL)
    .then(res => res.json())
    .then(res => { // array of movies
        //

        for (let i = 0; i < res.length; i++) {
            // call the delete method
            // do it when the title is missing fron the record.

            let settings = {
                method: "DELETE"
            }
            if (res[i].title === undefined) {
                fetch(baseURL + res[i].id, settings)
            }
        }
        console.log(res)
    });

// TODO delete posts

// TODO add posts

// TODO html format