var map;

async function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2.5,
        disableDefaultUI: true,
        // center in CQ
        center: new google.maps.LatLng(29.563009, 106.551559),
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8a8a8a"
                }]
            },
            {
                "featureType": "road.arterial",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#373737"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3c3c3c"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4e4e4e"
                }]
            },
            {
                "featureType": "road.local",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3d3d3d"
                }]
            }
        ]
    });

    kunming(map);

    setTimeout(function(){
        hainan(map);
      }, 1500);

    setTimeout(function(){
        southwest_china(map);
      }, 1600);

    setTimeout(function(){
        hongkong(map);
    }, 3000);

    setTimeout(function(){
        tibet(map);
    }, 3200);

    setTimeout(function(){
        us_camp(map);
    }, 5000);

    setTimeout(function(){
        greece(map);
    }, 5300);

    setTimeout(function(){
        southeast_asia(map);
    }, 5500);
}

/*
 * Childhood travel: 
 * Chongqing - Kunming - Hainan - Chengdu - Wuhan - 
 * Lijiang/Shangri-La/Dali - 
 * Hongkong - Shanghai - Guiyang - 
 * Jiuzhaigou -Qinghai - Delingha - Dunhuang - Lanzhou
 * Tibet: Bingzhongluo - Nyingchi - Medog -  
 * Beijing
 */

function kunming(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(29.563009,106.551559),         // Chongqing
              waypoints: [
                {location: new google.maps.LatLng(25.043333,102.706108)}   // Kunming, Yunan
              ],
              destination: new google.maps.LatLng(29.563009,106.551559),   // Chongqing
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function route1(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#ffcc33',
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

// Flights
function hainan(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#ffcc33',
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

  var locations = [{lat: 29.563009, lng: 106.551559},    // Chongqing
                   {lat: 18.261313, lng: 109.511676}    // Sanya
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 17 * i, locations[i]);
  }
}

function southwest_china(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(29.563009,106.551559),         // Chongqing
              waypoints: [
                {location: new google.maps.LatLng(30.657,104.066002)},   // Chengdu
                {location: new google.maps.LatLng(29.563009,106.551559)},   // Chongqing
                {location: new google.maps.LatLng(30.58333,114.26667)},   // Wuhan
                {location: new google.maps.LatLng(29.563009,106.551559)},   // Chongqing
                {location: new google.maps.LatLng(26.86879,100.22072)},   // Lijiang
                {location: new google.maps.LatLng(27.83333,99.70166386)},   // Shangri-La
                {location: new google.maps.LatLng(25.044548,100.520096)},   // Dali
                {location: new google.maps.LatLng(29.563009,106.551559)},   // Chongqing
              ],
              destination: new google.maps.LatLng(29.563009,106.551559),   // Chongqing
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function hongkong(map) {
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 0.5,
      scale: 4
    };
  
    var line = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: '#ffcc33',
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
  
    var locations = [{lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 22.302711, lng: 114.177216},    // Hong Kong
                     {lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 31.224361, lng: 121.46917}    // Shanghai
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
  //        map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function tibet(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(29.563009,106.551559),         // Chongqing
              waypoints: [
                {location: new google.maps.LatLng(26.646999,106.629997)},   // Guiyang
                {location: new google.maps.LatLng(29.563009,106.551559)},   // Chongqing
                {location: new google.maps.LatLng(33.200001,103.900002)},   // Jiuzhaigou
                {location: new google.maps.LatLng(37.326862,100.142338)},   // Qinghai
                {location: new google.maps.LatLng(37.376,97.37457)},   // Delingha
                {location: new google.maps.LatLng(40.142132,94.66188)},   // Dunhuang
                {location: new google.maps.LatLng(36.054871,103.828812)},   // Lanzhou
                {location: new google.maps.LatLng(29.563009,106.551559)},   // Chongqing
                {location: new google.maps.LatLng(28.015577,98.622081)},   // Bingzhongle
                {location: new google.maps.LatLng(29.651808,94.66188)},   // Nyingchi
                {location: new google.maps.LatLng(29.325298,95.333197)}   // Medog
              ],
              destination: new google.maps.LatLng(29.563009,106.551559),   // Chongqing
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

/* 
 * Teenage:
 * US: LA - SD - BOS - NY - DC
 * Greece:  (Doha) - Athens - Mikonos - Santorini
 * Viet Nam: Hanoi - Hue - Nha Trang - Da Lat - Mui Ne -Ho Chi Minh City
 * Cambodia: Phnom Penh - Siem Reap
 */

function us_camp(map) {
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 0.5,
      scale: 4
    };
  
    var line = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: '#ffcc33',
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
  
    var locations = [{lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 39.916668, lng: 116.383331},    // Beijing
                     {lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 31.224361, lng: 121.46917},    // Shanghai
                     {lat: 34.052235, lng: -118.243683},    // LA
                     {lat: 32.715736, lng: -117.161087},    // SD
                     {lat: 42.361145, lng: -71.057083},    // BOS
                     {lat: 40.730610, lng: -73.935242},    // NY
                     {lat: 38.900497, lng: -77.007507},    // DC
                     {lat: 31.224361, lng: 121.46917},    // Shanghai
                     {lat: 29.563009, lng: 106.551559}    // Chongqing
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
  //        map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

  function greece(map) {
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 0.5,
      scale: 4
    };
  
    var line = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: '#ffcc33',
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
  
    var locations = [{lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 25.286106, lng: 51.534817},    // Doha
                     {lat: 37.98381, lng: 23.727539},    // Athens
                     {lat: 37.450001, lng: 25.35},    // Mykonos
                     {lat: 36.393154, lng: 25.46151},    // Santorini
                     {lat: 37.98381, lng: 23.727539},    // Athens
                     {lat: 25.286106, lng: 51.534817},    // Doha
                     {lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 22.816668, lng: 108.316666},    // Nanning
                     {lat: 21.028511, lng: 105.804817}     // Hanoi
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
  //        map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function southeast_asia(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(21.028511,105.804817),         // Hanoi
              waypoints: [
                {location: new google.maps.LatLng(16.463713,107.590866)},   // Hue
                {location: new google.maps.LatLng(12.24507,109.19432)},   // Nha Trang
                {location: new google.maps.LatLng(11.94646,108.44193)},   // Da Lat
                {location: new google.maps.LatLng(10.9333,108.2833)},   // Mui Ne
                {location: new google.maps.LatLng(10.762622,106.660172)},   // Ho Chi Minh City
                {location: new google.maps.LatLng(11.56245,104.91601)}   // Phnom Penh
              ],
              destination: new google.maps.LatLng(13.36179,103.86056),   // Siem Reap
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}


/*
 * Undergrad:
 * Chicago - CU
 * NY
 * Indy - Columbus - Detroit - CHI - CQ
 * CU - New Orleans - Atlanta - CQ - FL: ORL - UF - Daytona Beach
 * North Michigan: Milwaukee - Copper Harbor - Lighthouse
 * Grand Canyon: 
 * Seattle - Snoqualmie - Mt Rainier - Portland - Seattle
 * NY - RU: Saint Petersburg - Moscow - Yekaterinburg - Novosibirsk - Krasnoyarsk - Irkutsk - Chita - Manchuria - Beijing - Chongqing
 * DC - Montauk - Tupper Lake
 * Cali: SF - Yosemite
 * Cleveland - Pittsburg - NY - Tupper - Burlington - Cleveland
 * FL: Orlando - Tampa - Miami - Key West
 * LA - NY - CU - BOS - CU - BOS - RI - BOS
 * Nashville - Great Smoky - Ashville - Lexington - Indy - CU
 * CU - BOS - Detorit - CU
 * CU - BOS - NY - DC - CU
 * CU - Bloomington, IL - Cable, OH
 * CU - Cleveland - BOS - Portland - Acadia - BOS
 */

google.maps.event.addDomListener(window, 'load', initMap);
