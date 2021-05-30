$(document).ready(function() {
    $('.logo-container').slick({
        arrows:true,
        autoplay:true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        autoplaySpeed:3000,
    });
});

$(document).ready(function() {
    $('.rewiews-container').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        autoplaySpeed:3000,
    });
});

$(document).ready(function() {
    $('.portfolio-cards').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        autoplaySpeed:3000,
    });
});