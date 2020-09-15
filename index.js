$(function() {

  // Fixed Header
  let headerH = $("#hero").innerHeight(),
      fixedHeader = $("#header-nav"),
      scrollOffset = $(window).scrollTop(); // Scroll value in pixels
  
   checkScroll(scrollOffset)
   
    $(window).on("scroll", function() {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= headerH ) {
          fixedHeader.addClass("fixed");
        } else {
          fixedHeader.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    // Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
    })
});
