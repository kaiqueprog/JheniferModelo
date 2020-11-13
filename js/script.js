$(document).ready(function(){
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("stycky");
        }else {
            $('.navbar').removeClass("stycky");
        }
        if(this.scrollY > 500){
            $('.btn-cima').addClass("show");
        }else {
            $('.btn-cima').removeClass("show");
        }
    });

    // Slide-up script
    $('.btn-cima').click(function() {
        $('html').animate({scrollTop: 0})
    });


    // Menu Mobile/Script
   $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('#nav-toggle').toggleClass("active");
   });

    //Typing animação
    var typed = new Typed(".digitar", {
        strings: ["Modelo","farmacêutica","odontologica","médica","recepcionista"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".digitar2", {
        strings: ["farmacêutica","Modelo","odontologica","médica","recepcionista","Modelo"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

   // Carousel
   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false,
        },
        600:{
            items: 2,
            nav: false,
        },
        1000:{
            items: 3,
            nav: false,
        }
    }
   });
});