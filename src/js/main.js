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
        arrows: false
    })
    
    // #####################
    // TEASERS SLIDER

    var $teasersSlider = $('.teasers__slider__wrapper');

    $teasersSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.teasersBtn-prev'),
        nextArrow: $('.teasersBtn-next'),
        responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        ]
    });



})();