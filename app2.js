/**
 * Created by Admin on 2016-12-03.
 */
(function () {
    navigator.geolocation.getCurrentPosition(function(location) {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
        console.log(location.coords.accuracy);
    })
}());