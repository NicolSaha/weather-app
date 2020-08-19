import displayWeather from "./displayWeather.js";
import displayForecast from "./displayForecast.js";

// SEARCH ENGINE CITY
export default function searchCity(city) {
  const units = "metric";
  const apiKey = "0546a51e6ee07afd4031494f64e6a747";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayWeather)
    .catch((error) => console.error(error));

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayForecast)
    .catch((error) => console.error(error));
}
