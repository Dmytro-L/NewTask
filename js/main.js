
//Меню mobile

$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('action');
        $('body').toggleClass('lock');
        
    });
});

new Swiper('.portfolio__slider', {
    slidesPerView: 1,
    //Стрелки
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },

    //Буллеты

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //Превью
    thumbs: {
        swiper: {
            el: '.mini-slider',
            slidesPerView: 4,
        }
    },
});

new Swiper('.comment__swiper', {
    navigation: {
        nextEl: '.next-arr',
        prevEl: '.prev-arr'
    },
    //Буллеты

    pagination: {
        el: '.pagination',
        clickable: true,
    },
    slidesPerView: 1,
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 0){
    $('.header__main').css({'background-color' : 'rgba(94, 93, 93, 0.37)'});
    } else{
    $('.header__main').css({'background-color' : 'blur(12px)'});
    }
});
