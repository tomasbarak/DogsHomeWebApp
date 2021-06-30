function requestLatitude(){
    let coordenadas = [1, 1];

    var latitude = 0.0;

    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById("latitude").innerText = position.coords.latitude;
        document.getElementById("longitude").innerText = position.coords.longitude;
        loadMap(position.coords.latitude, position.coords.longitude);
    });
}
function loadMap(lat, lon){
    L.mapquest.key = 'rAz2YbIIuNryqXVME5mGQlxx4HU6DbzW';

    // 'map' refers to a <div> element with the ID map
    console.log([document.getElementById("latitude").innerText, document.getElementById("longitude").innerText ]);
    L.mapquest.map('map', {
        center: [document.getElementById("latitude").innerText, document.getElementById("longitude").innerText ],
        layers: L.mapquest.tileLayer('map'),
        zoom: 20
    });
}