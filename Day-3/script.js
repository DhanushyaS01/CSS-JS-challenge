const container = document.getElementById("container");
const searchInput = document.getElementById("search");

let posts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    posts = data;
    displayPosts(posts);
  });

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(value)
  );

  displayPosts(filtered);
});

function displayPosts(data) {
    container.innerHTML = "";
    data.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
  
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
  
      container.appendChild(div);
    });
  }