export const mapMovies = ({title, rating, genre, director, plot, id}) => {
    return `<tr data-id="${id}" >
                       <td>
                            <h1>${title}</h1>
                       </td>
                       <td data-id="${id}" class="user-record">${title}.</td>

                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
};
