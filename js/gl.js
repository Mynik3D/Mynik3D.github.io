$(document).ready(function() {
	 $("#carousel").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 80,
        itemMargin: 5,
        maxWidth: 400
    }),
	   $("#slider").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1
    }),
	    $("#carousel2").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 90,
        itemMargin: 5,
        maxWidth: 400
    }),
	   $("#slider2").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1
    }),
	    $("#carousel3").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 90,
        itemMargin: 5,
        maxWidth: 400
    }),
	   $("#slider3").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1
    }),
 $(".close-gal").click(function() {
        $(".gall").css("top", -9999);
        $("body").css("overflow-y", "scroll");
    }),
    $(".show-gall-bruschatka").click(function() {
        $(".gall-bruschatka").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
      $(".show-gall-elites").click(function() {
        $(".gall-elites").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
      $(".show-gall-universal").click(function() {
        $(".gall-universal").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-vosmigrannik").click(function() {
        $(".gall-vosmigrannik").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-meduza").click(function() {
        $(".gall-meduza").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-rombik").click(function() {
        $(".gall-rombik").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-zvezdopad").click(function() {
        $(".gall-zvezdopad").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-dubayz").click(function() {
        $(".gall-dubayz").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
     $(".show-gall-shirokiy").click(function() {
        $(".gall-shirokiy").css("top", 0);
        $("body").css("overflow", "hidden");
    }),
   
       $("#carousel li").click(function() {
        var carouselItem;
        carouselItem = $(this).index();

        var slider = $('#slider').data('flexslider');
        var animationSpeed = slider.vars.animationSpeed;
        //save animation speed to reset later
        slider.vars.animationSpeed = 0;
        slider.flexAnimate(2);
        //position index for desired slide goes here
        slider.vars.animationSpeed = animationSpeed;

        slider.flexAnimate(carouselItem);

    });

});

// g0dh-192u-93k5-dhd4