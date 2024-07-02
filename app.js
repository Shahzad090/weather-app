const inputBox = document.getElementsByClassName('input-box');
const searchBtn = document.getElementsByid('searchBtn');
const weather_img = document.getElementsByClassName('weather-img');
const temprature = document.getElementsByClassName('temprature');
const discription = document.getElementsByClassName('discription');
const humidity = document.getElementsByid('humidity');
const wind_speed = document.getElementsByid('wind-speed');


async function checkWeather(city){
    const api_key = "e55672564eeeb6c1eef9aa0a44a9b185"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city name} &appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json());
}

console.log(weather_data);

searchBtn.addEventListener('click, ()=>'{
    checkWeather(inputBox.value);
})