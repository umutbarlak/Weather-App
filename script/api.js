const API_KEY = "ba9226259506c3a4665760fb03d62d3c";

export async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    return response.json()
  } catch (error) {
    console.log(error);
  }
}
