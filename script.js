function checkWeather(){

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.898,53.2724,53.3331&longitude=-8.4706,-9.051,-6.2489&daily=temperature_2m_min,wind_gusts_10m_max&forecast_days=1";
const outputElement = document.getElementById('output');

const dublinWeatherElement = document.getElementById('DublinWeather');
const corkWeatherElement = document.getElementById('CorkWeather');
const galwayWeatherElement = document.getElementById('GalwayWeather');


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
dublinWeatherElement.textContent = "Temperature is " + data[0].daily.temperature_2m_min[0] 
corkWeatherElement.textContent= data[1].daily.temperature_2m_min[0]
galwayWeatherElement.textContent = data[2].daily.temperature_2m_min[0]
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
