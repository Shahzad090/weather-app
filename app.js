const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temprature = document.querySelector(".temprature");
const discription = document.querySelector(".discription");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector("location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "e55672564eeeb6c1eef9aa0a44a9b185";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === "404") {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  // location_not_found.style.display = "none";
  // weather_body.style.display = "flex";
  temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  discription.innerHTML = `${weather_data.weather[0].main}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clear":
      weather_img.src = "/image/clear.png";
      break;
    case "Cloud":
      weather_img.src = "/image/cloud.png";
      break;
    case "Mist":
      weather_img.src = "/image/mist.png";
      break;
    case "Rain":
      weather_img.src = "/image/rain.png";
      break;
    case "Snow":
      weather_img.src = "/image/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
