var certificatesSlider;

$(document).ready(function () {
    $('select').niceSelect();
    certificatesSlider = new Swiper('.certificates-slider', {
        spaceBetween: 45,
        loop: false,
        slidesPerView: 3,
    });
});