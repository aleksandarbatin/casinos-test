// ###############################
// MAIN JAVASCRIPT 
// ###############################

(function() {
	// ###################
    // Mobile menu toggle

    $('.header__menuBtn').click(function(){
        $('.header__nav').toggle("slow");
    });

    // #####################
    // INTRO SLIDER

    var $introSlider = $('.intro__slider');

    $introSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    })

})();