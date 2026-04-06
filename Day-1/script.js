fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        const userdata = document.getElementById('user-table-body')
        data.forEach((user) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            userdata.appendChild(row);
        });
    })

    .catch((error) => {console.log(error);});
