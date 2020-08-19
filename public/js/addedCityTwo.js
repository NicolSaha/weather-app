// SHOW OR HIDE TEXT ITEMS CITY #2
export function hideTextTwo() {
  const shownTextTwo = document.querySelector(".shown-text-two");
  shownTextTwo.classList.add("hidden");
  const hiddenTextTwo = document.querySelector(".hidden-text-two");
  hiddenTextTwo.classList.remove("hidden");
  const hideTempMetricsTwo = document.getElementById(
    "temperature-units-added-two"
  );
  hideTempMetricsTwo.classList.remove("hidden");
  const hideIconsTwo = document.querySelector("#humidity-img-two");
  hideIconsTwo.classList.remove("hidden");
}

// ADDED CITY #2
export default function handleSubmitAddedCityTwo(event) {
  event.preventDefault();
  let cityTwo = document.querySelector("#search-city-input-added-city-two")
    .value;
  let currentCityTwo = document.querySelector("#chosencity-added-two");
  localStorage.setItem("myChosenCityTwo", `${cityTwo}`);
  currentCityTwo.textContent = `${localStorage.getItem("myChosenCityTwo")}`;

  searchCityAddedTwo(cityTwo);
  if (cityTwo) {
    currentCityTwo.innerHTML = `${cityTwo}`;
  } else {
    currentCityTwo.innerHTML = null;
    alert("Please type a city");
  }
  hideTextTwo();
}

// SEARCH ENGINE ADDED CITY #2
export function searchCityAddedTwo(cityTwo) {
  const units = "metric";
  const apiKey = "0546a51e6ee07afd4031494f64e6a747";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityTwo}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayAddedCityTwo)
    .catch((error) => console.error(error));
}

// DISPLAY ADDED CITY #2
export function displayAddedCityTwo(response) {
  // City
  let cityTwo = response.name;
  document.querySelector("#chosencity-added-two").innerHTML = cityTwo;

  // Current Temperature
  let celsiusTemperatureTwo = response.main.temp;
  let currentTemperatureTwo = Math.round(celsiusTemperatureTwo);
  document.querySelector(
    "#current-temperature-added-two"
  ).innerHTML = ` \xa0${currentTemperatureTwo}`;

  // Description of Current Temperature
  let descriptionTwo = response.weather[0].description;
  document.querySelector(
    "#temperature-description-added-two"
  ).innerHTML = descriptionTwo;

  // Humidity
  let humidityTwo = response.main.humidity;
  document.querySelector("#humidity-two").innerHTML = ` \xa0${humidityTwo}%`;

  // Icon
  let iconTwo = document.querySelector("#weathericontoday-added-two img");
  iconTwo.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  iconTwo.setAttribute("alt", response.weather[0].description);
}
