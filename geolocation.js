//I don't see the url for the geolocation API. Don't we need that for fetch? Is that why geolocation won't load?

window.onload = function () {
    var startPos;
    var geoSuccess = function (position) {
      startPos = position;
      document.getElementById('latitude').innerText= startPos.coords.latitude;
      document.getElementById('longitude').innerText = startPos.coords.longitude;
    };
    var geoError = function (error) {
      console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };