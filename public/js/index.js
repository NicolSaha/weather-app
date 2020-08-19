import getNameOfDayByNumber from "./daysOfWeek.js";
import handleSubmit from "./handleSubmit.js";
import searchCity from "./searchCityEngine.js";
import formatHours from "./formatHours.js";
import handleSubmitAddedCityOne, {
  hideText,
  searchCityAdded,
  displayAddedCityOne,
} from "./addedCityOne.js";

import handleSubmitAddedCityTwo, {
  hideTextTwo,
  searchCityAddedTwo,
  displayAddedCityTwo,
} from "./addedCityTwo.js";
import { getCurrentLocation, handleLocation } from "./currentLocation.js";
import userPushEnterMain, {
  userPushEnterOne,
  userPushEnterTwo,
} from "./submitOnEnterMain.js";

// DATE & TIME
const now = new Date();
const CURRENT_DATE_TXT = document.querySelector("#current-date");

// TIME
const CURRENT_DATE = now.getDate();
const CURRENT_DAY = getNameOfDayByNumber(now.getDay());
document.getElementById("currentDay").textContent = CURRENT_DAY;

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
CURRENT_DATE_TXT.innerHTML = `${CURRENT_DAY}, ${CURRENT_MONTH} ${CURRENT_DATE}, ${CURRENT_YEAR}, ${formatHours()}`;

// INITIAL SEARCH
searchCity("Porto");

// HANDLE FORM LOCATION
let findLocation = document.querySelector("#currentlocation");
findLocation.addEventListener("click", getCurrentLocation);

// HANDLE FORM SUBMIT CITY
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
const inputMain = document.querySelector("#search-city-input");
inputMain.addEventListener("keyup", userPushEnterMain);

// HANDLE FORM SUBMIT ADDED CITY 1
let formOne = document.querySelector("#search-form-added-city-one");
formOne.addEventListener("submit", handleSubmitAddedCityOne);
const inputOne = document.querySelector("#search-city-input-added-city-one");
inputOne.addEventListener("keyup", userPushEnterOne);

// HANDLE FORM SUBMIT ADDED CITY 2
let formTwo = document.querySelector("#search-form-added-city-two");
formTwo.addEventListener("submit", handleSubmitAddedCityTwo);
const inputTwo = document.querySelector("#search-city-input-added-city-two");
inputTwo.addEventListener("keyup", userPushEnterTwo);
