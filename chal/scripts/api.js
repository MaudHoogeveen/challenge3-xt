//tijd

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}





//slideshow

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // afbeelding verandert om de 5 seconden
}





// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibWF1ZGhvb2dldmVlbiIsImEiOiJja21rbDd1eXoxMjM4MnBrNXAxeGp1bTF2In0.BGQfXWE3hT4_JNVBhwVQTw';

// Initialate map object wordt aangemaakt noodzakelijke items
var map = new mapboxgl.Map({
  container: 'map', // in welk element in je html de map moet komen dus het id
  style: 'mapbox://styles/mapbox/satellite-v9', // welke styling je van de map wilt, soorten staan op de site in de handleiding
  center: [-73.97758969464644, 40.76784581606793 ], // specifieke plek breedte en de lengte graad
  zoom: 13, //inzoomen 
 // pitch: 45, //ander perspectief nu een hoek van 45 graden voor landingslocatie is het wel cool.
  bearing: 0// draaien n-o-z-w 
  
});

map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.NavigationControl());  //voegt plusje en minnetje toe

//pop-up

var popup = new mapboxgl.Popup().setHTML('<img src="images/MCD-logo.jpg"> <h4>McDonald&#39s</h4><h5> 946 8th Ave, New York, NY 10019, Verenigde Staten</h5><p>Klassieke, vertrouwde fastfoodketen die bekend staat om zijn burgers, frietjes en shakes. </p>');

var marker = new mapboxgl.Marker({color: "red"})
.setLngLat([-73.98317935405768, 40.76676260203017 ])
.setPopup(popup)
.addTo(map);

var popup1 = new mapboxgl.Popup().setHTML('<img src="images/mc 5.jpg"> <h4>McDonald&#39s</h4> <h5> McDonalds 2049 Broadway, New York, NY 10023, Verenigde Staten</h5><p>Klassieke, vertrouwde fastfoodketen die bekend staat om zijn burgers, frietjes en shakes. </p>');
var marker1 = new mapboxgl.Marker({color: "red"})
.setLngLat([-73.98245821009176, 40.779096881387105])
.setPopup(popup1)
.addTo(map);

var popup2 = new mapboxgl.Popup().setHTML('<img src="images/2019-01-19.jpg"> <h4>McDonald&#39s</h4><p>Klassieke, vertrouwde fastfoodketen die bekend staat om zijn burgers, frietjes en shakes. </p>');
var marker2 = new mapboxgl.Marker({color: "red"})
.setLngLat([-73.98346120055896, 40.763643182597775])
.setPopup(popup2)
.addTo(map);

var popup3 = new mapboxgl.Popup().setHTML('<img src="images/2019-08-20.jpg"> <h4>McDonalds</h4><p>Klassieke, vertrouwde fastfoodketen die bekend staat om zijn burgers, frietjes en shakes. </p>');
var marker3 = new mapboxgl.Marker({color: "red"})
.setLngLat([-73.95664735542624, 40.76716235491699])
.setPopup(popup3)
.addTo(map);

// var marker4 = new mapboxgl.Marker({color: "red"})
// .setLngLat([116.08559222581098, -8.355898595070398]) 
// .addTo(map);

// var marker5 = new mapboxgl.Marker({color: "red"})
// .setLngLat([-12.417207159328822, 8.414146368871183]) 
// .addTo(map);

// var marker6 = new mapboxgl.Marker({color: "red"})
// .setLngLat([-15.429146323682794, 28.14823798460778]) 
// .addTo(map);





//weather 

function getAPIdata() {

	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey ='81d183812aada2a637b0a0fea05feeed';
	var city = 'new%20york,us';

	// construct request
	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	//als respons in niet ok, dan gaat het naar catch verder
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	//funtie uitvoeren error 
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + '&#176;C <br>' + type;
}


function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}



// init data stream
getAPIdata();




















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