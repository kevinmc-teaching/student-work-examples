const toCelsius = 273.15;
const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=vancouver,bc&APPID=bdaafe2eae78dfb96b4ae4fd5ffb2368';


var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", weatherAPI, false ); // false for synchronous request
    xmlHttp.send( null );

var response = JSON.parse(xmlHttp.response);
var temp = response.main.temp - toCelsius;
temp = Math.floor(temp);


document.getElementById("weatherTemp").innerHTML = temp + "&deg; C";


