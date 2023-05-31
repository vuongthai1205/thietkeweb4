(function($) {
    //preloader js
    $(window).on("load", function() {
        $(".preloader").fadeOut(1000);
    });

    //Header
    var fixed_top = $("header");
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 200) {
            fixed_top.addClass("header--fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("header--fixed animated fadeInDown");
        }
    });

    // //close mobile menu after clicking nav-link
    // $(".nav-link").click(function () {
    //     $(".navbar-toggler").addClass("collapsed");
    // });
    // $(".nav-link").click(function () {
    //     $(".navbar-collapse").removeClass("show");
    // });

    //Animation on Scroll initializing
    AOS.init();
})(jQuery);