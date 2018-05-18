var app = {
    cachedom : function(){
        this.carouselItems = $(".carousel-item");
        this.events = $(".event");
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
    init : function() {
        this.cachedom();
        this.setBgCarousel();
        this.headerAnimations();
        this.setBgEvents();
        console.log(this.events);
    }
}.init()