// Анимация

new WOW().init();

// Карусели

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

$(document).ready(function() {
    $('.card-team').slick({
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        autoplaySpeed:3000,
    });
});

$(document).ready(function() {
    $('.swiper-slide, .swiper-slide-second').slick({
        arrows:true,
        autoplay:true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        autoplaySpeed:3000,
    });
});

// Раскрытие текста

$(".team-btn").click(function(e) {
	e.preventDefault();
  $(this).prev().toggleClass("text-open")
})

// Плавная прокрутка

$(document).on("click", "nav a, .button-company-button-link", function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});