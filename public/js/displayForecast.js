// DISPLAY CURRENT FORECAST
export default function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 40; index++) {
    index += 8;
    forecast = response.list[index];
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
            
            <div class="inline-flex justify-center">
            <span id="current-temperature-Two" class="mt-6 text-gray-900 text-2xl md:text-4xl leading-5 font-medium">${Math.round(
              forecast.main.temp
            )}</span>
            <p class=mt-4 text-xs"> °C
            </p>
            </div>
            <dl class="mt-1 flex-grow flex flex-col justify-between"> 
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
