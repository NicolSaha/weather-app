// DATE & TIME
const now = new Date();
const CURRENT_DATE_TXT = document.querySelector("#current-date");

// TIME
const CURRENT_HOUR = now.getHours();
const CURRENT_MINUTES = now.getMinutes();
const CURRENT_DATE = now.getDate();

// GET DAYS OF THE WEEK
function getNameOfDayByNumber(day) {
  switch (day) {
    case 1:
    case 8:
      return "Monday";
    case 2:
    case 9:
      return "Tuesday";
    case 3:
    case 10:
      return "Wednesday";
    case 4:
    case 11:
      return "Thursday";
    case 5:
    case 12:
      return "Friday";
    case 6:
    case 13:
      return "Saturday";
    case 7:
    case 14:
      return "Sunday";
    default:
      console.log("Day is invalid");
      break;
  }
}

function getNextDaysOfWeek() {
  if (CURRENT_DAY == "Monday") {
    return 1;
  } else if (CURRENT_DAY == "Tuesday") {
    return 2;
  } else if (CURRENT_DAY == "Wednesday") {
    return 3;
  } else if (CURRENT_DAY == "Thursday") {
    return 4;
  } else if (CURRENT_DAY == "Friday") {
    return 5;
  } else if (CURRENT_DAY == "Saturday") {
    return 6;
  } else if (CURRENT_DAY == "Sunday") {
    return 7;
  }
}

const CURRENT_DAY = getNameOfDayByNumber(now.getDay());
const CURRENT_DAY_PLUS_ONE = getNextDaysOfWeek(CURRENT_DAY) + Number(1);
const CURRENT_DAY_PLUS_TWO = getNextDaysOfWeek(CURRENT_DAY) + Number(2);
const CURRENT_DAY_PLUS_THREE = getNextDaysOfWeek(CURRENT_DAY) + Number(3);
const CURRENT_DAY_PLUS_FOUR = getNextDaysOfWeek(CURRENT_DAY) + Number(4);
const CURRENT_DAY_PLUS_FIVE = getNextDaysOfWeek(CURRENT_DAY) + Number(5);

document.getElementById("currentDay").textContent = CURRENT_DAY;

/* document.getElementById("currentDayPlusOne").textContent = getNameOfDayByNumber(
  CURRENT_DAY_PLUS_ONE
);
document.getElementById("currentDayPlusTwo").textContent = getNameOfDayByNumber(
  CURRENT_DAY_PLUS_TWO
);
document.getElementById(
  "currentDayPlusThree"
).textContent = getNameOfDayByNumber(CURRENT_DAY_PLUS_THREE);
document.getElementById(
  "currentDayPlusFour"
).textContent = getNameOfDayByNumber(CURRENT_DAY_PLUS_FOUR);
*/

// GET CURRENT MONTH
let MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const CURRENT_MONTH = MONTHS[now.getMonth()];

// GET CURRENT YEAR
const CURRENT_YEAR = now.getFullYear();

// OUTPUT CURRENT DATE & TIME
CURRENT_DATE_TXT.innerHTML = `${CURRENT_DAY}, ${CURRENT_MONTH} ${CURRENT_DATE}, ${CURRENT_YEAR}, ${CURRENT_HOUR}:${CURRENT_MINUTES}`;

// HANDLE SUBMIT CITY
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  let currentCity = document.querySelector("#chosencity");
  localStorage.setItem("myChosenCity", `${city}`);
  city.textContent = `${localStorage.getItem("myChosenCity")}`;

  searchCity(city);
  if (city) {
    currentCity.innerHTML = `${city}`;
  } else {
    currentCity.innerHTML = null;
    alert("Please type a city");
  }
}

// DISPLAY CURRENT TEMPERATURE
function displayWeather(response) {
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

  // Feels like Temperature
  let feelsLike = Math.round(response.main.feels_like);
  //document.querySelector("#feels-like").innerHTML = `${feelsLike} ºC`;

  // Humidity
  let humidity = response.main.humidity;
  //document.querySelector("#humidity").innerHTML = `${humidity}%`;

  // Wind
  let wind = Math.round(response.wind.speed * 3.6);
  //document.querySelector("#wind").innerHTML = `${wind} km/h`;

  // Sunrise Time
  let sunrise = formatSunriseTime(response.sys.sunrise * 1000);
  //document.querySelector("#sunrise").innerHTML = `${sunrise}h`;

  // Icon
  let icon = document.querySelector("#weathericontoday img");
  icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  icon.setAttribute("alt", response.weather[0].description);
}

// DISPLAY CURRENT FORECAST
function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 40; index++) {
    index += 8;
    // console.log(index);
    forecast = response.list[index];
    //console.log(forecast);
    let forecastDate = forecast.dt_txt;
    let subForecastDate = forecastDate.substr(0, 11);

    forecastElement.innerHTML += `

  <li
          class="col-span-1 flex flex-col text-center items-center justify-between bg-white rounded-lg shadow m-2 w-full"
        >
          <div class="flex-1 flex flex-col p-8">
           
          <span id="weathericontoday-Two"><img class="weathericon" src="https://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png" alt="${forecast.weather[0].description}" /></span>

            <span id="temperature-description-Two" class="sm:italic">${
              forecast.weather[0].description
            }</span>
            
            <div class="inline-flex">
            <span id="current-temperature-Two" class="mt-6 text-gray-900 text-2xl md:text-4xl leading-5 font-medium">${Math.round(
              forecast.main.temp
            )}</span>
            <span class="temperature-units-Two mt-4 text-xs">
                  <a href="#" id="celsius-link-Two" class="active"> °C</a> |
                  <a href="#" id="fahrenheit-link-Two"  style="color: gray;">°F</a>
                </span>
            </div>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dd class="text-gray-500 text-sm leading-5" > <span id="chosencity-Two"></span> </dd>
              <dd class="mt-3">
                <span
                  class="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full"
                  >${subForecastDate}</span
                >
              </dd>
            </dl>
          </div>
        </li>
    `;
  }
}

// FORMAT SUNRISE TIME
function formatSunriseTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// FORMAT FORCAST TIME
function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// SEARCH ENGINE CITY
function searchCity(city) {
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

// INITIAL SEARCH
searchCity("Porto");

/* !!!!! CITIES ADDED */

// SHOW OR HIDE TEXT ITEMS CITY #1
function hideText() {
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
function handleSubmitAddedCityOne(event) {
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
function searchCityAdded(cityOne) {
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
function displayAddedCityOne(response) {
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

// SHOW OR HIDE TEXT ITEMS CITY #2
function hideTextTwo() {
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
function handleSubmitAddedCityTwo(event) {
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
function searchCityAddedTwo(cityTwo) {
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
function displayAddedCityTwo(response) {
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

/* !!!!! */

// HANDLE FORM LOCATION
let findLocation = document.querySelector("#currentlocation");
findLocation.addEventListener("click", getCurrentLocation);

// GET CURRENT LOCATION
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handleLocation);
}

// HANDLE CURRENT LOCATION
function handleLocation(location) {
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
    .then(displayForecast)
    .catch((error) => console.error(error));
}

//SUBMIT ON ENTER
function keyupSub(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementsByClassName("submit").click();
  }
}

// HANDLE FORM SUBMIT CITY
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("keyup", keyupSub);

// HANDLE FORM SUBMIT ADDED CITY 1
let formOne = document.querySelector("#search-form-added-city-one");
formOne.addEventListener("submit", handleSubmitAddedCityOne);
formOne.addEventListener("keyup", keyupSub);

// HANDLE FORM SUBMIT ADDED CITY 2
let formTwo = document.querySelector("#search-form-added-city-two");
formTwo.addEventListener("submit", handleSubmitAddedCityTwo);
formTwo.addEventListener("keyup", keyupSub);

// CONVERT FAHRENHEIT TO CELCIUS
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");

  CELSIUS_LINK.classList.remove("active");
  FAHRENHEIT_LINK.classList.add("active");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  currentTemperature.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();

  CELSIUS_LINK.classList.add("active");
  FAHRENHEIT_LINK.classList.remove("active");

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let FAHRENHEIT_LINK = document.querySelector("#fahrenheit-link-main");
FAHRENHEIT_LINK.addEventListener("click", displayFahrenheitTemperature);

let CELSIUS_LINK = document.querySelector("#celsius-link-main");
CELSIUS_LINK.addEventListener("click", displayCelsiusTemperature);

/*
// Convert Fahrenheit and Celsius ADDED CITY ONE
function displayFahrenheitTemperatureOne(event) {
  event.preventDefault();
  let currentTemperatureOne = document.querySelector(
    "#current-temperature-added-one"
  );

  // Remove active class celsius add to fahrenheit
  celsiusLinkOne.classList.remove("active");
  fahrenheitLinkOne.classList.add("active");

  let fahrenheitTemperatureOne = (celsiusTemperatureOne * 9) / 5 + 32;
  currentTemperatureOne.innerHTML = Math.round(fahrenheitTemperatureOne);
}

function displayCelsiusTemperatureOne(event) {
  event.preventDefault();

  // Add active class celsius remove to fahrenheit
  celsiusLinkOne.classList.add("active");
  fahrenheitLinkOne.classList.remove("active");

  let currentTemperatureOne = document.querySelector(
    "#current-temperature-added-one"
  );
  currentTemperatureOne.innerHTML = Math.round(celsiusTemperatureOne);
}

let celsiusTemperatureOne = null;

let fahrenheitLinkOne = document.querySelector("#fahrenheit-link-added-one");
fahrenheitLinkOne.addEventListener("click", displayFahrenheitTemperatureOne);

let celsiusLinkOne = document.querySelector("#celsius-link-added-one");
celsiusLinkOne.addEventListener("click", displayCelsiusTemperatureOne);
*/

/**
//Extra Info Dropdown

const dropDownExtraInfo = document.getElementById("dropdown");
const dropDownBtn = document.getElementById("options-menu");

function toggleDropDown() {
  dropDownExtraInfo.classList.remove("opacity-0", "scale-95");
  dropDownExtraInfo.classList.add(
    "transform",
    "opacity-100",
    "scale-100",
    "transition",
    "duration-100",
    "ease-out"
  );
}

function toggleDropDownOff() {
  dropDownExtraInfo.classList.add("opacity-0", "scale-95", "duration-75");
  dropDownExtraInfo.classList.remove(
    "transform",
    "opacity-100",
    "scale-100",
    "transition",
    "duration-100",
    "ease-out"
  );
}

dropDownBtn.addEventListener("click", toggleDropDown);
dropDownExtraInfo.addEventListener("mouseleave", toggleDropDownOff);
*/
