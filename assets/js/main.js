var certificatesSlider;

$(document).ready(function () {
    $('select').niceSelect();
    certificatesSlider = new Swiper('.certificates-slider', {
        spaceBetween: 45,
        loop: false,
        slidesPerView: 3,
    });

    var specialistsSlider = new Swiper('#specialists-slider', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 4,
        navigation: {
            prevEl: '.specialists-slider-navs .swiper-button-prev',
            nextEl: '.specialists-slider-navs .swiper-button-next',
        },
    });

    var helpSlider = new Swiper('#help-slider', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 4,
        navigation: {
            prevEl: '.help-slider-navs .swiper-button-prev',
            nextEl: '.help-slider-navs .swiper-button-next',
        },
    });

    var newsSlider = new Swiper('#news-slider', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 4,
        navigation: {
            prevEl: '.news-slider-navs .swiper-button-prev',
            nextEl: '.news-slider-navs .swiper-button-next',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView:2,
            },
        }
    });

    var ourServicessSlider = new Swiper('#our-services-slider', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 4,
        navigation: {
            prevEl: '.our-services-slider-navs .swiper-button-prev',
            nextEl: '.our-services-slider-navs .swiper-button-next',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 15,
            }
        }
    });

    var aboutCenterSlider = new Swiper('#about-center-slider', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '#about-center-slider .swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            prevEl: '#about-center-slider .swiper-button-prev',
            nextEl: '#about-center-slider .swiper-button-next',
        },
    });


    var pageSlider = new Swiper('.page-slider', {
        spaceBetween: 0,
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '.page-slider .swiper-pagination',
            type: 'bullets',
        },

    });

    var peopleSlider = new Swiper('.people-slider', {
        spaceBetween: 0,
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '.people-slider .swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<span>'+current+' / '+total+'</span>'
            },
        },
        navigation: {
            prevEl: '.people-slider .swiper-button-prev',
            nextEl: '.people-slider .swiper-button-next',
        },

    });
});