if (navigator.geolocation) {
  console.log("Geolocation is supported!");
  
  // Get permission and geolocation
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  // var img = new Image();
  // var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000}
  // navigator.geolocation.watchPosition(onError, options); 

  function updateImg(location){
    var img = new Image();
   img.src = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&center=" + location;
  }
  var submit = document.getElementById('js-submit')
  submit.addEventListener('click', onSubmit)
  
  function onSuccess(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var currentlocation = (lat + "," + lon);   			   
		document.getElementById("js-userlat").value = lat
    document.getElementById("js-userlon").value = lon
    document.getElementById("currentlocation").appendChild(updateImg(currentLocation));
  }
  
  function onSubmit(){
    var newLat = document.getElementById("js-userlat").value;
    var newLon = document.getElementById("js-userlon").value;
    var newLocation = (newLat + "," + newLon);
    updateImg(newLocation);
    document.getElementById("currentlocation").replaceChild(updateImg(newLocation));
  }
  
  function onError(error){
    alert("Geolocation error: " + error);
  } 
}