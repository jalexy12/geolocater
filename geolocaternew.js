var output = document.getElementById('body');
var submit = document.getElementById('js-submit');
var newLat = document.getElementById("js-userlat");
var newLon = document.getElementById("js-userlon");
var elCity = document.getElementById("findcity");
var citysub = document.getElementById("submitcity")

citysub.addEventListener('click', onUpdateCity);
submit.addEventListener('click', onSubmit);


if(!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser </p>";
  //  return;
  }

  function updateImg(longitude, latitude) {
     output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function onSuccess(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    updateImg(longitude,latitude);
  };

  function onSubmit(event) {
        event.preventDefault();
    updateImg(newLon.value, newLat.value);

  }


  function onError() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(onSuccess, onError);


function onUpdateCity(event) {
  event.preventDefault();
    var cityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22'+ elCity.value + '%22&format=json&callback=';

  fetch(cityUrl)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
     /* var img = new Image();
    img.src = findCity(cityUrl);

    output.appendChild(img);  */  
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

  
  
