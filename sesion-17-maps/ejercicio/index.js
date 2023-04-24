let marker, map;

function initMap() {
  // console.log("inicializando mapa")
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.856614,
        lng: 2.352222,
      },
      map,
      title: "Paris, France",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 52.939916,
        lng: -73.549136,
      },
      map,
      title: "Canada, Quebec",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.853075,
        lng: 2.349769,
      },
      map,
      title: "Paris, Notre Dame",
    })
  );
}
