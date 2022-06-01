const baseURL = "https://exclusive-radical-peak.glitch.me/movies/";

//1. get all the itmes
// - > fetch request
// then -> convert to jsopn object to handle
// find tthe missing titles to delete

fetch(baseURL)
    .then(res => res.json())
    .then(res => { // array of movies
        console.log(res)

        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
            // call the delete method
            // do it when the title is missing fron the record.
            // console.log(res[i]);
            let settings = {
                method: "DELETE"
            }
            if (res[i].title === "" || res[i].title === "1" || res[i].title === 1 || res[i].title === "hello" || res[i].title === undefined) {
                fetch(baseURL + res[i].id, settings)
            }
            if (res[i].id === 283 || res[i].id === 284) {
                fetch(baseURL + res[i].id, settings)
            }
        }
    });

// TODO delete posts

// TODO add posts

// TODO html format