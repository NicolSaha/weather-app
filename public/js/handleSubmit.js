import searchCity from "./searchCityEngine.js";

// HANDLE SUBMIT CITY
export default function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  let currentCity = document.querySelector("#chosencity");
  localStorage.setItem("myChosenCity", `${city}`);
  currentCity.textContent = `${localStorage.getItem("myChosenCity")}`;

  searchCity(city);
  if (city) {
    currentCity.innerHTML = `${city}`;
  } else {
    currentCity.innerHTML = null;
    alert("Please type a city");
  }
}
