
    var app = {
        cachedom : function(){
            this.carouselItems = $(".carousel-item");
            this.events = $(".event");
            this.sections = $("section");
        },
        bindEvents: function() {
            this.sections.map(function(item, obj){
                name = obj.className.split(" ")[0];
                $('a[href="#'+name+'"]').click(function(){this.scrollTo(obj.className)}.bind(this));
            }.bind(this));
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
        scrollTo : function(section){
            sectionName = section.split(" ")[0];
            $('html,body').animate({
                scrollTop: $('.'+sectionName).offset().top - 54
            }, 400);
        },
        init : function() {
            this.cachedom();
            this.setBgCarousel();
            this.headerAnimations();
            this.setBgEvents();
            this.bindEvents();
        }
    }.init()

    var styles =    
    [
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#71d6ff"
                },
                {
                    "saturation": 100
                },
                {
                    "lightness": -5
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
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
                    "hue": "#ffffff"
                },
                {
                    "saturation": 0
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#deecec"
                },
                {
                    "saturation": -73
                },
                {
                    "lightness": 72
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#bababa"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 25
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#e3e3e3"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 0
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#59cfff"
                },
                {
                    "saturation": 100
                },
                {
                    "lightness": 34
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]
   

    //Maps
    var  initMap = function () {
        var ibn = {lat: -8.768533, lng: -63.8880005};
        var options =  {
            zoom: 17,
            center: ibn,
            styles: styles,
            fullscreenControl: false

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

 