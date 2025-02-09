let latitudUsuario;
let longitudUsuario;

window.onload=function(){
    
    obtener();
}


function obtener(){ 
    navigator.geolocation.getCurrentPosition(guardarCoordenadas, mostrarError); 
   } 
  
   function guardarCoordenadas(posicion){ 
     
    longitudUsuario = posicion.coords.longitude;
    latitudUsuario = posicion.coords.latitude;
    iniciarMap();
   }
  
   function mostrarError(){ 
     alert("Debe permitir acceso a la ubicación")
   }

  
  //Geolocalización
  function iniciarMap(){
   
    var coordenadasUsuario = {lat:latitudUsuario ,lng: longitudUsuario};
    var coord = {lat:10.174459195167335 ,lng:-84.15840253184273};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    
  
    var marker = new google.maps.Marker({
      position: coord, title: "Feria",
      map: map
    });

    var markerUsuario = new google.maps.Marker({
        position: coordenadasUsuario, title: "Tú ubicación",
        map: map
      });
  
    // Ubicación Usuario
    var origen = new google.maps.LatLng(latitudUsuario, longitudUsuario);
    // Zarcero
    var destino = new google.maps.LatLng(10.174459195167335,-84.15840253184273);
    var miRuta =[origen,destino];
    var trazo = new google.maps.Polyline({ path: miRuta, strokeColor:"#0000FF",strokeOpacity: 0.8, strokeWeight: 3});
    trazo.setMap(map);
  }