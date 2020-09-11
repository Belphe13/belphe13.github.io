var map;

async function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3.5,
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
    
 //   freshman(map);

/*
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

    setTimeout(function(){
        freshman(map);
    }, 7200);

    setTimeout(function(){
        greatlakes(map);
    }, 7500);

    setTimeout(function(){
        sophomore(map);
    }, 8000);

    setTimeout(function(){
        northern_mi(map);
    }, 8200);

    setTimeout(function(){
        grand_canyon(map);
    }, 9500);

    setTimeout(function(){
        seattle(map);
    }, 9800);

    setTimeout(function(){
        northwest(map);
    }, 10000);


    setTimeout(function(){
        newyork_train(map);
    }, 11500);

    setTimeout(function(){
        russia(map);
    }, 12000);

    setTimeout(function(){
        siberia(map);
    }, 13000);
*/
//    setTimeout(function(){
        manchuria(map);
 //   }, 13500);

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
 * CQ - Doha - Chicago - CU
 * NY
 * Indy - Columbus - Detroit - CHI - CQ
 * CU - New Orleans - Atlanta - CQ - FL: ORL - Gainesville - Daytona Beach
 * North Michigan: Milwaukee - Copper Harbor - Pictured Rocks
 * Grand Canyon: St Louis - OK - Albuquerque - GC NP - Horseshoe Bend - Monument Valley - KS City
 * Seattle - Snoqualmie - Mt Rainier - Portland - Seattle
 * NY - RU: Saint Petersburg - Moscow - Yekaterinburg - Novosibirsk - Krasnoyarsk - Irkutsk - Chita - Manchuria - Beijing - Chongqing
 * DC - Montauk - Tupper Lake
 * Cali: SF - Yosemite
 * Cleveland - Pittsburg - NY - Tupper - Burlington - Cleveland
 * FL: Orlando - Tampa - Miami - Key West
 * LA - NY - CU - BOS - CU - BOS - RI - BOS
 * Nashville - Great Smoky - Ashville - Mammoth Cave - Lexington - Indy - CU
 * CU - NY - BOS - NY - CU
 * CU - BOS - Detorit - CU
 * CU - BOS - NY - DC - CU
 * CU - Bloomington, IL - Cable, OH
 * CU - Cleveland - BOS - Portland - Acadia - BOS
 */

function freshman(map) {
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
  
    var locations = [{lat: 29.563009, lng: 106.551559},    // CQ
                     {lat: 25.286106, lng: 51.534817},    // Doha
                     {lat: 41.881832, lng: -87.623177},    // CHI
                     {lat: 40.116421, lng: -88.243385},    // CU
                     {lat: 41.881832, lng: -87.623177},    // CHI
                     {lat: 40.73061, lng: -73.935242},    // NY
                     {lat: 40.116421, lng: -88.243385}    // CU
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
          map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function greatlakes(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Champaign, IL',
              waypoints: [
                {location: 'Indianapolis, IN'},
                {location: 'Columbus, OH'},
                {location: 'Detroit, MI'},
                {location: 'Chicago, IL'},
                {location: 'Champaign, IL'},
                {location: 'New Orleans, LA'},
              ],
              destination: 'Atlanta, GA',
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function sophomore(map) {
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
  
    var locations = [{lat: 33.753746, lng: -84.38633},    // ATL
                     {lat: 41.881832, lng: -87.623177},    // CHI
                     {lat: 39.916668, lng: 116.383331},    // BJ
                     {lat: 29.563009, lng: 106.551559},    // CQ
                     {lat: 39.916668, lng: 116.383331},    // BJ
                     {lat: 41.881832, lng: -87.623177},    // CHI
                     {lat: 28.538336, lng: -81.379234}    // ORL
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
//          map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function northern_mi(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Champaign, IL',
              waypoints: [
                {location: 'Milwaukee, WI'},
                {location: 'Copper Harbor, MI'},
                {location: new google.maps.LatLng(46.563491,-86.3253972)},         // Pictured Rocks
              ],
              destination: 'Champaign, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function grand_canyon(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Champaign, IL',
              waypoints: [
                {location: 'Saint Louis, MO'},
                {location: 'Oklahoma City, OK'},
                {location: 'Albuquerque, NM'},
                {location: new google.maps.LatLng(36.056595,-112.125092)},         // Grand Canyon
                {location: new google.maps.LatLng(36.881278,-111.510749)},         // Horseshoe Bend
                {location: new google.maps.LatLng(36.991728,-110.161052)},         // Monument Valley
                {location: 'Kansas City, KS'},
              ],
              destination: 'Champaign, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function seattle(map) {
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
  
    var locations = [{lat: 40.116421, lng: -88.243385},    // CU
                     {lat: 41.881832, lng: -87.623177},    // CHI
                     {lat: 47.608013, lng: -122.335167}    // SEA
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
//          map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function northwest(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Seattle, WA',
              waypoints: [
                {location: new google.maps.LatLng(47.52871,-121.82539)},         // Snoqualmie
                {location: new google.maps.LatLng(46.742846, -121.545901
                    )},         // Mt Rainier NP
                {location: 'Portland, OR'},
              ],
              destination: 'Seattle, WA',
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function newyork_train(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Champaign, IL',
              waypoints: [
                {location: 'Chicago, IL'},
                {location: 'Albany, NY'},
              ],
              destination: 'New York, NY',
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}


function russia(map) {
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
  
    var locations = [{lat: 40.73061, lng: -73.935242},    // NY
                     {lat: 59.9375, lng: 30.308611}    // Sanit Petersburg
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
          map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

function siberia(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(59.9375,30.308611),         // St Petersburg
              waypoints: [
                {location: 'Yekaterinburg'},
              ],
              destination: 'Zabaikalsk',           // Manchuria
              travelMode: google.maps.TravelMode.DRIVING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

function manchuria(map) {
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
  
    var locations = [{lat: 49.57059, lng: 117.33163},    // Manchuria
                     {lat: 39.916668, lng: 116.383331},    // Beijing
                     {lat: 29.563009, lng: 106.551559},    // Chongqing
                     {lat: 39.916668, lng: 116.383331},    // Beijing
                     {lat: 41.881832, lng: -87.623177},    // Chicago
                     {lat: 40.116421, lng: -88.243385},    // Champaign
                     {lat: 41.881832, lng: -87.623177},    // Chicago
                     {lat: 38.900497, lng: -77.007507}    // DC
                   ];
  
    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(coords) {
          latlng = new google.maps.LatLng(coords.lat, coords.lng);
//          map.panTo(latlng);
          line.getPath().push(latlng);
      }, 17 * i, locations[i]);
    }
  }

google.maps.event.addDomListener(window, 'load', initMap);
