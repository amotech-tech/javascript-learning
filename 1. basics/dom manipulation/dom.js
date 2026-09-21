
// Get the movie list
const movieList = document.querySelector("#movie-list ul");

// Get the add movie form
const form = document.querySelector("#add-movie");

// Get the input field
const input = document.querySelector("#add-movie input");

// Delete a movie
movieList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }

});

// Add a new movie
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the movie name
    const movieName = input.value.trim();

    // Check if input is empty
    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create movie name
    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = movieName;

    // Create delete button
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "delete";

    // Put the spans inside the li
    li.appendChild(name);
    li.appendChild(deleteButton);

    // Add the new movie to the list
    movieList.appendChild(li);

    // Clear the input
    input.value = "";

});
