import displayWeather from "./displayWeather.js";
import displayForecast from "./displayForecast.js";

// GET CURRENT LOCATION
export function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handleLocation);
}

// HANDLE CURRENT LOCATION
export function handleLocation(location) {
  let units = "metric";
  let apiKey = "0546a51e6ee07afd4031494f64e6a747";
  let latitude = location.coords.latitude;
  let longitude = location.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayWeather)
    .catch((error) => console.error(error));

  apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayWeather)
    .then(displayForecast)
    .catch((error) => console.error(error));
}
