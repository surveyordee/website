function checkWeather(){

//Get the information from  open-meteo.com
//Three locations specified by latitude longitude
// Get temperature, wind gust speed,precipitation_probability_min
// Forecast for one day
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.898,53.2724,53.3331&longitude=-8.4706,-9.051,-6.2489&daily=temperature_2m_min,wind_gusts_10m_max,precipitation_probability_min&forecast_days=1";

//Get the three locations that we will write the forcast to
const dublinWeatherElement = document.getElementById('DublinWeather');
const corkWeatherElement = document.getElementById('CorkWeather');
const galwayWeatherElement = document.getElementById('GalwayWeather');
//Make the call to the website
fetch(apiUrl)
.then(response => {
if (!response.ok) {
// something went wrong. alert user
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
//write html to the dublin,cork,galway tags on the html page. using innerHTML to format the html
//using bootstrap to format the unordered list items
//use the index to get the data for each location
dublinWeatherElement.innerHTML = "<ul class='list-group'><li class='list-group-item'>Temperature is " + data[0].daily.temperature_2m_min[0] + "C</li>" +"<li class='list-group-item'> Max gust windspeed is " + data[0].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li class='list-group-item'>Chance of rain " + data[0].daily.precipitation_probability_min + " %</li></ul>"
corkWeatherElement.innerHTML = "<ul class='list-group'><li class='list-group-item'>Temperature is " + data[1].daily.temperature_2m_min[0] +  "C</li>" +"<li class='list-group-item'> Max gust windspeed is " + data[1].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li class='list-group-item'>Chance of rain " + data[1].daily.precipitation_probability_min + " %</li></ul>"
galwayWeatherElement.innerHTML = "<ul class='list-group'><li class='list-group-item'>Temperature is " + data[2].daily.temperature_2m_min[0] +  "C</li>" +"<li class='list-group-item'> Max gust windspeed is " + data[2].daily.wind_gusts_10m_max[0] + " km\\h</li>"+ "<li class='list-group-item'>Chance of rain " + data[2].daily.precipitation_probability_min + " %</li></ul>"
})
.catch(error => {
 //write error to the console in the browser
console.error('Error:', error);
});
}
