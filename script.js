function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let cityName = document.querySelector(".cityName");
  cityName.innerHTML = `${cityInput.value}`;
  let apiKey = "2ba6be2e07e99b5bca5c271f875e6bec";
  let city = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

function showWeather(response) {
  console.log(response.data);
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let feelsLike = document.querySelector("#feels-like");
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}`;

  let description = document.querySelector(".weatherDescription");
  description.innerHTML = `${response.data.weather[0].description}`;
}

function getPosition(position) {
  let apiKey = "2ba6be2e07e99b5bca5c271f875e6bec";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}
navigator.geolocation.getCurrentPosition(getPosition);
