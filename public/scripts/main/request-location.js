function requestLatitude(){
    let coordenadas = [1, 1];

    var latitude = 0.0;

    navigator.geolocation.getCurrentPosition(function(position) {
        loadMap(position.coords.latitude, position.coords.longitude);
    });
}
function loadMap(lat, lon){
    var mymap = L.map('map').setView([lat, lon], 15);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFyYWsyMDA1IiwiYSI6ImNrcWoxZHo2dTBvOXYycG1sODd0emJxeDMifQ.ZaKvMp-SM86jlLY6G44b2w', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    var marker1 = L.marker([lat-0.01, lon+0.01]).addTo(mymap);
    marker1.bindPopup("<div style='position: relative; height: 100%; width: 51px; display: flex; align-items: center; justify-content: flex-start; flex-direction: column'><img src='https://res.cloudinary.com/dogshome/image/upload/v1625108682/hji4aeftmk2rp0zdpzye.jpg' alt='logo' style='width: 100%; height: auto'><a style='color: black; font-size: 8pt'>Pupi</a></div>").openPopup();

    var marker2 = L.marker([lat, lon]).addTo(mymap);
    marker2.bindPopup("<div style='position: relative; height: 100%; width: 51px; display: flex; align-items: center; justify-content: flex-start; flex-direction: column'><img src='https://www.mibelgrano.com.ar/wp-content/uploads/2018/12/perro-perdido.jpg' alt='logo' style='width: 100%; height: auto'><a style='color: black; font-size: 8pt'>Puré</a></div>").openPopup();
}