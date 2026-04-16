async function find() {
    let name = document.getElementById('user').value;
    let box = document.getElementById('res');
    if (!name) return;

    let res = await fetch(`https://api.github.com/users/${name}`);
    let data = await res.json();

    if (data.message) {
        box.innerHTML = "Not found";
    } else {
        box.innerHTML = `
            <div style="background:rgb(26, 24, 24); padding: 10px; border-radius: 8px;">
                <img src="${data.avatar_url}">
            <h3  style="color: white;">${data.name || name}</h3>
            <p style="color: white;">Followers: ${data.followers}</p>
            <p style="color: white;">Number of Repositories: ${data.public_repos}</p>
            </div>
        `;
    }
    box.style.display = "block";
}
