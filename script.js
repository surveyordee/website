function checkWeather(){

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.898,53.2724,53.3331&longitude=-8.4706,-9.051,-6.2489&daily=temperature_2m_min,wind_gusts_10m_max,precipitation_probability_min&forecast_days=1";
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
dublinWeatherElement.innerHTML = "<ul class=""list-group""><li class=""list-group-item"">Temperature is " + data[0].daily.temperature_2m_min[0] + "C</li>" +"<li class=""list-group-item""> Max gust windspeed is " + data[0].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li class=""list-group-item"">Chance of rain " + data[0].daily.precipitation_probability_min + " %</li></ul>"
corkWeatherElement.innerHTML = "<ul><li>Temperature is " + data[1].daily.temperature_2m_min[0] +  "C</li>" +"<li> Max gust windspeed is " + data[1].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li>Chance of rain " + data[1].daily.precipitation_probability_min + " %</li></ul>"
galwayWeatherElement.innerHTML = "<ul><li>Temperature is " + data[2].daily.temperature_2m_min[0] +  "C</li>" +"<li> Max gust windspeed is " + data[2].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li>Chance of rain " + data[2].daily.precipitation_probability_min + " %</li></ul>"
})
.catch(error => {
console.error('Error:', error);
});
}
