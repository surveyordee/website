//curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m" 

function getWeatherForecast(){
alert("testing");
//const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=[51.898, 53.2724, 53.3331]&longitude=[-8.4706, -9.051, -6.2489]&daily=temperature_2m,wind_speed_10m&forecast_days=1";

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.898,53.2724,53.3331&longitude=-8.4706,-9.051,-6.2489&daily=temperature_2m_min,wind_gusts_10m_max&forecast_days=1";
const outputElement = document.getElementById('output');
var forecastData;
    
fetch(apiUrl)
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
forecastData = JSON.stringify(data, null, 2);
for (const element of data) {
    alert(element.daily.temperature_2m_min[0]);
    alert(element.daily.wind_gusts_10m_max[0]);
}
outputElement.textContent = JSON.stringify(data, null, 2);
return forecastData;
})
.catch(error => {
console.error('Error:', error);
});
}

function checkWeather(){
    var getForecast = getWeatherForecast();
}
