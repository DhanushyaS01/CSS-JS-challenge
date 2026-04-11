const search = document.getElementById("search");
const input = document.getElementById("city");
const result = document.getElementById("result");

const API_KEY = "a94d6dca7b0bbd8cfc4b6409c4415626";

search.addEventListener("click", () => {
  const city = input.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      result.innerHTML = `
        <h2>City Name: ${data.name}</h2>
        <p>Temperature: 🌡 ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Wind: ${data.wind.deg}°</p>
        <p>Gust: ${data.wind.gust} m/s</p>
        <p>Speed: ${data.wind.speed} m/s</p>
        <p>Timezone: ${data.timezone}</p>
        <p>Visibility: ${data.visibility}</p>
      `;
    });
});