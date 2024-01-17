import { fetchWeatherData } from "./api.js";
import { selectors, getWeather } from "./weather.js";
import { upDateUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => getWeather());
