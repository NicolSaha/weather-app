// DISPLAY CURRENT TEMPERATURE
export default function displayWeather(response) {
  // City
  let city = response.name;
  document.querySelector("#chosencity").innerHTML = city;

  // Current Temperature
  let celsiusTemperature = response.main.temp;
  let currentTemperature = Math.round(celsiusTemperature);
  document.querySelector("#current-temperature").innerHTML = currentTemperature;

  // Description of Current Temperature
  let description = response.weather[0].description;
  document.querySelector("#temperature-description").innerHTML = description;

  // Humidity
  let humidity = response.main.humidity;
  document.querySelector("#humidity").innerHTML = `\xa0${humidity}%`;

  // Icon
  let icon = document.querySelector("#weathericontoday img");
  icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  icon.setAttribute("alt", response.weather[0].description);
}
