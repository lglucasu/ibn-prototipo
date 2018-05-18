
    var app = {
        cachedom : function(){
            this.carouselItems = $(".carousel-item");
            this.events = $(".event");
            this.sections = $("section");
        },
        setBgCarousel : function() {
            this.carouselItems.map(function(item, obj){
                $(obj).css({
                    "background" : "linear-gradient(rgba(0,0,0,.7) , rgba(0,0,0,.5) ) , url('"+ $(obj).data('bg') +"')",
                    "background-attachment": "fixed",
                    "background-position": "center",
                    "background-repeat": "no-repeat",
                    "background-size" : "cover"
                })
            }) 
        },
        setBgEvents : function() {
            this.events.map(function(item, obj){
                $(obj).css({
                    "background" : "linear-gradient(rgba(0,0,0,.1) , rgba(0,0,0,1) ) , url('"+ $(obj).data('bg') +"')",
                    "background-position": "center",
                    "background-repeat": "no-repeat",
                    "background-size" : "cover"
                })
            })
        },
        headerAnimations: function() {
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                //Navbar
                if (scroll >= 60) {
                    $(".navbar").removeClass('navbar-dark').addClass('navbar-light');
                    $(".navbar").removeClass('bg-transparent').addClass('bg-white');
                    $('.navbar  .container-fluid').removeClass('start-position');
                    $('.navbar .logo').css({'width': '30px', 'height' : '30px'}); 
                } else {
                    $(".navbar").addClass('navbar-dark').removeClass('navbar-light');
                    $(".navbar").addClass('bg-transparent').removeClass('bg-white');
                    $('.navbar  .container-fluid').addClass('start-position');
                    $('.navbar .logo').css({'width': '50px', 'height' : '50px'}); 
                    
                }
            }); 
        },
        scrollTo: function(){

        },
        init : function() {
            this.cachedom();
            this.setBgCarousel();
            this.headerAnimations();
            this.setBgEvents();
            
        }
    }.init()

    var styles = 
    [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2.00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#9c9c9c"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#7b7b7b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8d7d4"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#070707"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        }
    ];

    //Maps
    var  initMap = function () {
        var ibn = {lat: -8.768533, lng: -63.8880005};
        var options =  {
            zoom: 15.6,
            center: ibn,
            styles: styles
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
            position: ibn,
            map: map,
        });
        var infoWindow = new google.maps.InfoWindow({
            content:'<h1>Enbaixada às nações</h1><h5>Venha nos visitar!</h5>'
        });
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }

