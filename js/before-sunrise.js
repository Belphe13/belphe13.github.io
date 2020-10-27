/*
*   Route animation based on actual film locations of
*   Before Sunrise by Richard Linklater in 1995 using Google
*   Maps API.
*
*   Solid line indicates walk/drive/transit;
*   Dashed line indicates fly/jumps;
*
*/

var map;
var t;

async function initMap() {
         t = 0;     
         map = new google.maps.Map(document.getElementById('map'), {
         zoom: 13,
         disableDefaultUI: true,
         center: new google.maps.LatLng(48.2082, 16.3738),    // Vienna
         styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#304a7d"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ]
       });

      budapest(map);
       
      t+=2000;

      setTimeout(function(){
        green_bridge(map);
      }, t);

      t+=1000;

      setTimeout(function(){
        two_spires_church(map);
      }, t);

      t+=200;

      setTimeout(function(){
        record_store(map);
      }, t);

      t+=1400;

      setTimeout(function(){
        nameless(map);
      }, t);

      t+=2500;

      setTimeout(function(){
        church(map);
      }, t);

      t+=200;

      setTimeout(function(){
        river_bank(map);
      }, t);

      t+=1600;

      setTimeout(function(){
        cafe(map);
      }, t);

      t+=1400;

      setTimeout(function(){
        montage(map);
      }, t);

}

/* train ride to Vienna from Budapest */
function budapest(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: 'Budapest-Keleti, Budapest, Kerepesi út 2-4, 1087 Hungary',         // Budapest
            destination: 'Wien Westbahnhof, Europaplatz 2/3, 1150 Wien, Austria',   // Vienna Train Station
            travelMode: google.maps.TravelMode.TRANSIT
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
/* marker
  const infowindow = new google.maps.InfoWindow({
    content: "<img src='img/bridge.png'>",
  });

  const marker = new google.maps.Marker({
    position: {lat: 48.196762, lng: 16.337598},
    map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeColor: 'white',
    strokeOpacity: 0.5,
    strokeWeight: 5,
    scale: 5,
    },
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
*/

}

function route(map, pathCoords) {
  var route = new google.maps.Polyline({
      path: [],
      geodesic : true,
      strokeColor: 'white',
      strokeOpacity: 0.5,
      strokeWeight: 5,
      editable: false,
      map:map
  });

//    console.log(pathCoords.length);

  for (var i = 0; i < pathCoords.length; i++) {
      setTimeout(function(coords) {
          route.getPath().push(coords);
      }, 5 * i, pathCoords[i]);
  }
}

function green_bridge(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: 'Wien Westbahnhof, Europaplatz 2/3, 1150 Wien, Austria',   // Vienna Train Station
            destination: 'Zollamssteg, 1030 Wien, Vienna, Austria',   // green bridge
            travelMode: google.maps.TravelMode.WALKING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}

function two_spires_church(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: 'white',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [
                   {lat: 48.209809, lng: 16.384371},    // green brdige
                   {lat: 48.215417, lng: 16.359127}    // two spires church
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 15 * i, locations[i]);
  }
}

function record_store(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: 'Votivkirche, Rooseveltplatz, 1090 Wien, Vienna, Austria',         // two spire church
            destination: 'Teuchtler Schallplattenhandlung, Windmühlgasse 10, Austria',   // record store
            travelMode: google.maps.TravelMode.TRANSIT
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}

function nameless(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: 'Teuchtler Schallplattenhandlung, Windmühlgasse 10, Austria',   // record store
            waypoints: [
              {location: 'Maria-Theresien-Platz, Burgring 5, 1010 Wien, Austria'},  // plaza
              {location: 'Friedhof der Namenlosen, Alberner Hafenzufahrtsstraße, 1110 Wien, Austria'},    // nameless
              {location: 'Wiener Riesenrad, 1020 Wien, Austria'},   // ferris wheel
              {location: 'Prater, 1020 Wien, Austria'},     // amusement park
              {location: 'Kleines Café, Franziskanerpl. 3, 1010 Wien, Austria'}    // cafe with palm reader
            ],
            destination: 'Catholic Church Maria am Gestade, Salvatorgasse 12, 1010 Wien, Austria',   // church exterior
            travelMode: google.maps.TravelMode.WALKING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}


function church(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: 'white',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 48.212789, lng: 16.370561},     // church exterior
                   {lat: 48.198904, lng: 16.353082},     // church interior
                   {lat: 48.218791, lng: 16.370733}     // river bank
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 15 * i, locations[i]);
  }
}

function river_bank(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: new google.maps.LatLng(48.218791,16.370733),         // river bank
            waypoints: [
              {location: new google.maps.LatLng(48.217741,16.372554)},    // Otto Wagner Schützenhaus
              {location: new google.maps.LatLng(48.187502,16.413368)},    // pinball
              {location: new google.maps.LatLng(48.21265,16.363005)},     // mölker steig
              {location: new google.maps.LatLng(48.212177,16.362774)},    // schrevyogelasses
              {location: new google.maps.LatLng(48.20334,16.355246)},     // belly dancer
              {location: new google.maps.LatLng(48.203367,16.355675)},    // spittelbergagasse
              {location: new google.maps.LatLng(48.203256,16.355734)}    // gutenberggasse
            ],
            destination: new google.maps.LatLng(48.203273,16.355882),   // pile of pallets
            travelMode: google.maps.TravelMode.WALKING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}

function cafe(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: new google.maps.LatLng(48.203273,16.355882),         // pile of pallets
            waypoints: [
              {location: 'Gumpendorfer Str. 11, 1060 Wien, Austria'},    // cafe phone calls
              {location: new google.maps.LatLng(48.204244,16.368555)},    // balcony
              {location: 'Franz-Josefs-Kai 27-29, 1010 Wien, Austria'},     // boat cafe
              {location: 'Faulmanngasse 2, 1040 Wien, Austria'},    // Roxy
              {location: new google.maps.LatLng(48.194446,16.364503)},     // harpsichord
              {location: new google.maps.LatLng(48.204244,16.368555)}    // balcony
            ],
            destination: 'Europaplatz 2/3, 1150 Wien, Austria',   // train station
            travelMode: google.maps.TravelMode.WALKING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}

function cafe_(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: 'white',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 48.203273, lng: 16.355882},     // pile of pallets
                   {lat: 48.19984, lng: 16.361126},     // phone calls
                   {lat: 48.204244, lng: 16.368555},     // balcony
                   {lat: 48.212835, lng: 16.376328},    // boat cafe
                   {lat: 48.198628, lng: 16.366032},    // Roxy
                   {lat: 48.194446, lng: 16.364503},     // harpsichord
                   {lat: 48.204244, lng: 16.368555},     // balcony
                   {lat: 48.196762, lng: 16.337598}     // train station
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 15 * i, locations[i]);
  }
}

function montage(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: 'white',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 48.196762, lng: 16.337598},     // train station
                   {lat: 48.209809, lng: 16.384371},     // green bridge
                   {lat: 48.212835, lng: 16.376328},    // boat cafe
                   {lat: 48.204244, lng: 16.368555},     // balcony
                   {lat: 48.203273, lng: 16.355882},     // pile of pallets
                   {lat: 48.159498, lng: 16.502461},     // nameless
                   {lat: 48.216641, lng: 16.395883},     // ferris wheel
                   {lat: 48.206583, lng: 16.374323},     // palm reader cafe
                   {lat: 48.217741, lng: 16.372554}     // river bank restaurant
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 15 * i, locations[i]);
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
