// SHOW OR HIDE TEXT ITEMS CITY #1
export function hideText() {
  const shownText = document.querySelector(".shown-text");
  shownText.classList.add("hidden");
  const hiddenText = document.querySelector(".hidden-text");
  hiddenText.classList.remove("hidden");
  const hideTempMetrics = document.getElementById(
    "temperature-units-added-one"
  );
  hideTempMetrics.classList.remove("hidden");
  const hideIcons = document.querySelector("#humidity-img-one");
  hideIcons.classList.remove("hidden");
}

// ADDED CITY #1
export default function handleSubmitAddedCityOne(event) {
  event.preventDefault();
  let cityOne = document.querySelector("#search-city-input-added-city-one")
    .value;
  let currentCityOne = document.querySelector("#chosencity-added-one");
  localStorage.setItem("myChosenCityOne", `${cityOne}`);
  currentCityOne.textContent = `${localStorage.getItem("myChosenCityOne")}`;

  searchCityAdded(cityOne);
  if (cityOne) {
    currentCityOne.innerHTML = `${cityOne}`;
  } else {
    currentCityOne.innerHTML = null;
    alert("Please type a city");
  }

  hideText();
}

// SEARCH ENGINE ADDED CITY #1
export function searchCityAdded(cityOne) {
  const units = "metric";
  const apiKey = "0546a51e6ee07afd4031494f64e6a747";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityOne}&appid=${apiKey}&units=${units}`;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .then(displayAddedCityOne)
    .catch((error) => console.error(error));
}

// DISPLAY ADDED CITY #1
export function displayAddedCityOne(response) {
  // City
  let cityOne = response.name;
  document.querySelector(
    "#chosencity-added-one"
  ).innerHTML = `${cityOne}  \xa0`;

  // Current Temperature
  let celsiusTemperatureOne = response.main.temp;
  let currentTemperatureOne = Math.round(celsiusTemperatureOne);
  document.querySelector(
    "#current-temperature-added-one"
  ).innerHTML = ` ${currentTemperatureOne}`;

  // Description of Current Temperature
  let descriptionOne = response.weather[0].description;
  document.querySelector(
    "#temperature-description-added-one"
  ).innerHTML = descriptionOne;

  // Humidity
  let humidityOne = response.main.humidity;
  document.querySelector("#humidity-one").innerHTML = ` \xa0${humidityOne}%`;

  // Icon
  let iconOne = document.querySelector("#weathericontoday-added-one img");
  iconOne.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  iconOne.setAttribute("alt", response.weather[0].description);
}
