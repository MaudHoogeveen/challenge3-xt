
//weather 

function getAPIdata() {

	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=81d183812aada2a637b0a0fea05feeed&q=new%20york + &lang=eng';
	
	// get current weather met naam van die variable waar de API in zit
	fetch(request)	
	
	// parse response to JSON format. 
	//daarna doet hij een functie met een resopons (ingebouwde variabele)
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBox = document.getElementById('weather');
		//weatherBox.innerHTML = response;
	
		//weatherBox.innerHTML = response.main.temp;

			//weergave temperatuur afgerond omlaag .round is omhoog afronden. 
		var degC = Math.floor(response.main.temp - 273.15);
		// var weatherBox = document.getElementById('weather');
		weatherBox.innerHTML = degC + '&#176;C <br>' + response.weather[0].description;
	});
}

// init data stream
getAPIdata();
//map 
// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibWF1ZGhvb2dldmVlbiIsImEiOiJja21rbDd1eXoxMjM4MnBrNXAxeGp1bTF2In0.BGQfXWE3hT4_JNVBhwVQTw';

// Initialate map object wordt aangemaakt noodzakelijke items
var map = new mapboxgl.Map({
  container: 'map', // in welk element in je html de map moet komen dus het id
  style: 'mapbox://styles/mapbox/streets-v11', // welke styling je van de map wilt, soorten staan op de site in de handleiding
  center: [40.71164894394286, -74.00734064635932] // specifieke plek breedte en de lengte graad
  zoom: 15, //inzoomen 
  bearing: 0// draaien n-o-z-w 
  
});



  // style: 'mapbox://styles/mapbox/satellite-v9'
  // style: 'mapbox://styles/mapbox/dark-v10'
  // pitch: 45,
  // bearing: -17.6,
  // Positioning the map on a certain longitute + latitude and zooming in
  // Let op de volgorde van de lat, lon!!
  // 
  // zoom: 15,
// Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl()); 

//COVID-19 NEW YORK

fetch('https://localcoviddata.com/covid19/v1/cases/newYorkTimes')
.then((response) => {
  return response.json(); // or .text() or .blob() ...
})
.then((text) => {
  // text is the response body
})
.catch((e) => {
  // error in e.message
});

	