const btn = document.getElementById("btn");
const jokeText = document.getElementById("joke");

btn.addEventListener("click", () => {
  jokeText.textContent = "Loading... 😂";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {  jokeText.innerHTML = `
     ${data.setup}<br><br>
     ${data.punchline}
      `;
    })
    .catch(() => {
      jokeText.textContent = "Failed to load joke 😢";
    });
});