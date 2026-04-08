const container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.address.street}, ${user.address.city}</p>
        <p>I'm a working professional seeking a job in the field of web development.</p>
        <button>View Profile</button>
      `;

      container.appendChild(card);
    });
  });