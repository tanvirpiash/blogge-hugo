$(document).ready(function () {
  "use strict";
  //  Headroom Initialize
});

$(".widget-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});
// G-Map
/**
 * Created by Kausar on 06/10/2016.
 */
 window.marker = null;

 function initialize() {
   var map;
   var lat = $("#map").data("lat");
   var long = $("#map").data("long");
   console.log(lat, long);
   var mapCenter = new google.maps.LatLng(lat, long);
   var style = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#202c3e"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            },
            {
                "weight": "1.39"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "0.96"
            },
            {
                "saturation": "9"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": "9"
            },
            {
                "color": "#29446b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#193a55"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
  ];
   var mapOptions = {
     // SET THE CENTER
     center: mapCenter,
     // SET THE MAP STYLE & ZOOM LEVEL
     mapTypeId: google.maps.MapTypeId.ROADMAP,
     // REMOVE ALL THE CONTROLS EXCEPT ZOOM
     zoom: 12,
     panControl: false,
     scrollwheel: false,
     zoomControl: true,
     mapTypeControl: false,
     scaleControl: false,
     streetViewControl: false,
     overviewMapControl: false,
     zoomControlOptions: {
       style: google.maps.ZoomControlStyle.LARGE,
     },
   };
 
   map = new google.maps.Map(document.getElementById("map"), mapOptions);
   // SET THE MAP TYPE
   var mapType = new google.maps.StyledMapType(style, {
     name: "Grayscale",
   });
   map.mapTypes.set("grey", mapType);
   map.setMapTypeId("grey");
   //CREATE A CUSTOM PIN ICON
   var marker_image = $("#map").data("pin");
   var pinIcon = new google.maps.MarkerImage(
     marker_image,
     null,
     null,
     null
   );
   marker = new google.maps.Marker({
     position: mapCenter,
     map: map,
     icon: pinIcon,
     title: "BLogge",
   });
 }
 
 if ($("#map").length > 0) {
   google.maps.event.addDomListener(window, "load", initialize);
 }
 