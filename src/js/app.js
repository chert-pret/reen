$( document ).ready(function() {

    function sliders() {
        const SLIDER_WORKS = $(".latest__slider-inner"),
              SLIDER_HERO = $(".hero__slider-inner");
     
        SLIDER_WORKS.slick({
            arrows: true,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            speed: 800,
            easing: "ease",
            initialSlide: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseonFocus: true,
            pauseOnHover: true,
            pauseOnDotHover: true,
            draggable: true,
            waitForAnimate: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    } 
                 }, {
                     breakpoint: 481,
                     settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    }
                 }
            ]
        });
     
        SLIDER_HERO.slick({
         arrows: true,
         dots: true,
         adaptiveHeight: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 800,
         easing: "ease",
         initialSlide: 0,
         pauseonFocus: true,
         pauseOnHover: true,
         pauseOnDotHover: true,
         draggable: true,
         waitForAnimate: false,
         autoplay: true,
         autoplaySpeed: 4000,
         });     
    }
    function burgerMenu() {
        const NAV = $(".header .nav"),
              BURGER = $(".nav-toggle");
    
        BURGER.on("click", function(event) {
            event.preventDefault();
      
            $(this).toggleClass("--active");
            NAV.toggleClass("--active");
          })
    
        NAV.click(handler);

        function handler(event) {
            let navLink = $(event.target);

            if (!navLink.is( "a" )) return;

            BURGER.toggleClass("--active");
            NAV.toggleClass("--active");
        }
    }
    function fixNav() {
        const HERO = $(".hero"),
              HEADER = $(".header__nav"),
              HEADER_NAV_HEIGHT = $(".header__nav").innerHeight(),
              PRE_HEADER_HEIGHT = $(".header-row").innerHeight();
    
        let scrollOffset = $(window).scrollTop();
    
        $(window).on("scroll", function() {
            scrollOffset = $(this).scrollTop();
            checkScroll(scrollOffset);
        });
    
        function checkScroll(scrollOffset) {
            if( scrollOffset >= PRE_HEADER_HEIGHT ) {
              HEADER.addClass("--fixed");
              HERO.css("margin-top", `${HEADER_NAV_HEIGHT}px`);
            } else {
              HEADER.removeClass("--fixed");
              HERO.css("margin-top", "0px");
            }
        }
    }
    function smoothScroll() {
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();
    
            let $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset().top;
    
            $("html, body").animate({
                scrollTop:  blockOffset
            }, 500);
        });
    }
    function app() {
        fixNav();
        sliders();
        burgerMenu();
        smoothScroll();
    }
    app();
});