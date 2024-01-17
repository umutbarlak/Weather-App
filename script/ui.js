import { convertCountryCode, convertTimeStamp } from "./utils.js";

export function upDateUI(data, selectors) {
  selectors.city.innerHTML = `${data.name}, ${convertCountryCode(
    data.sys.country
  )}`;

  selectors.dateTime.innerHTML = `${convertTimeStamp(data.dt, data.timezone)}`;

  selectors.weatherForecast.innerHTML = `${data.weather[0].main}`;

  selectors.weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`;

  selectors.weatherIcon.innerHTML = `<img class="weather-img" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;

  selectors.weatherMinMax.innerHTML = `<span>Min: ${data.main.temp_min.toFixed()}&#176</span><span>Max: ${data.main.temp_max.toFixed()}&#176</span>`;

  selectors.weatherRealfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;

  selectors.weatherHumidity.innerHTML = `% ${data.main.humidity.toFixed()}`;

  selectors.weatherWind.innerHTML = `${data.wind.speed.toFixed()} km/sa`;

  selectors.weatherPressure.innerHTML = `${data.main.pressure.toFixed()} hPa`;
}
