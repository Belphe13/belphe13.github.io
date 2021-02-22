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
         zoom: 14,
         disableDefaultUI: true,
         center: new google.maps.LatLng(48.8496, 2.3622),    // Paris
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
            "elementType": "labels",
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
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
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
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
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
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
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

      paris_montage(map);
       
      t+=1200;

      setTimeout(function(){
        bookstore(map);
      }, t);

      t+=2000;

      setTimeout(function(){
        boat(map);
      }, t);

      t+=200;

      setTimeout(function(){
        celine_apt(map);
      }, t);

}

function paris_montage(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#f70',
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

  var locations = [{lat: 48.851972, lng: 2.374662},     // apartment
                   {lat: 48.851763, lng: 2.374487},     // apartment front
                   {lat: 48.851299, lng: 2.351805},    // across notre dame
                   {lat: 48.849456, lng: 2.371487},     // park
                   {lat: 48.849034, lng: 2.372},     // outside park
                   {lat: 48.853289, lng: 2.383441},     // cafe
                   {lat: 48.853578, lng: 2.360731},     // outside of Paroisse Saint-Paul Saint-Louis
                   {lat: 48.852658, lng: 2.347213}     // Shakespeare and Company
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//       map.panTo(latlng);
        line.getPath().push(latlng);
    }, 150 * i, locations[i]);
  }
}

function route(map, pathCoords) {
  var route = new google.maps.Polyline({
      path: [],
      geodesic : true,
      strokeColor: '#f70',
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

function bookstore(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: '37 Rue de la Bûcherie, 75005 Paris, France',   // Shakespeare and Company
            waypoints: [
              {location: 'Rue Galande, 75005 Paris, France'},  // near bookstore
              {location: 'Rue des Jardins Saint-Paul, 75004 Paris, France'},    // outside of Paroisse Saint-Paul Saint-Louis
              {location: '4 Rue Charlemagne, 75004 Paris, France'},   // making a turn
              {location: 'Rue Eginhard, 75004 Paris, France'},     // environmental work
              {location: '14 Rue Jean-Macé, 75011 Paris, France'},    // cafe
              {location: 'Voie AA/12, 75012 Paris, France'},    // stairs
              {location: '1 Coulée Verte René-Dumont, 75012 Paris, France'}    // park
            ],
            destination: '2 Quai de la Tournelle, 75015 Paris, France',   // taking boat
            travelMode: google.maps.TravelMode.WALKING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}
/*
function boat(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: '2 Quai de la Tournelle, 75015 Paris, France',         // taking the boat
            destination: 'Quai Henri IV, 75004 Paris, France',   // off the boat
            travelMode: google.maps.TravelMode.TRANSIT
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}
*/

function boat(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#f70',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '1px'
          }],
    map:map
  });

  var locations = [
                   {lat: 48.850755, lng: 2.353214},    // take the boat
                   {lat: 48.848719, lng: 2.362382}    // off the boat
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 15 * i, locations[i]);
  }
}

/* final move to Celine's apartment */
function celine_apt(map) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
            origin: new google.maps.LatLng(48.848719,2.362382),   // Henry IV
            destination: new google.maps.LatLng(48.851735, 2.374440),   // Celine's apartment
            travelMode: google.maps.TravelMode.DRIVING
        };
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          route(map, result.routes[0].overview_path);
      }
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
