const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn')
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed');


async function checkWeather(city){
    const api_key = "e55672564eeeb6c1eef9aa0a44a9b185";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

   discription.innerHTML = `${weather_data.weather[0].discription}`;
console.log(weather_data)
//    humidity.innerHTML = `${weather_data.main.humidity}%`;

//    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
// }



searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});