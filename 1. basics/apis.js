const usersContainer =
    document.getElementById("users");


async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();


    users.forEach(function(user) {

        const userElement =
            document.createElement("div");

        userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;

        usersContainer.appendChild(userElement);

    });
}


getUsers();