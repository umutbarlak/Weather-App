import { fetchWeatherData } from "./api.js";
import { upDateUI } from "./ui.js";

export const selectors = {
  city: document.querySelector(".weather-city"),
  dateTime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searcForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFarenheit: document.querySelector(".weather-units-farenheit"),
  searchIcon: document.querySelector("#search-icon"),
};

let currCity = " ankara";
let units = "metric";

export async function getWeather() {
  const data = await fetchWeatherData(currCity, units);
  upDateUI(data, selectors);
}

selectors.searcForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  currCity = selectors.searchInput.value;
  await getWeather();
  selectors.searchInput.value = "";
});

selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
  }
  getWeather();
});

selectors.unitFarenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
  }
  getWeather();
});

console.log(units);

document.body.addEventListener("load", async () => {
  await getWeather();
});

// selectors.searchIcon.addEventListener("click", async (e) => {
//   e.preventDefault();
//   currCity = selectors.searchInput.value;
//   await getWeather();
//   selectors.searchInput.value = "";
// });
