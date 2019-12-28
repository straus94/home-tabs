$(function () {
    $('.header__item').on('click', function () {
        console.log('dasdasd');
        if (!$(this).hasClass('.header__item--active')) {
            $(this).parent().find('.header__item').removeClass('header__item--active');
            $(this).toggleClass('header__item--active');
            if($(this).hasClass('js-info')) {
                $(this).parent().parent().parent().find('div.body--active').removeClass('body--active');
                $(this).parent().parent().parent().find('div.js-info').toggleClass('body--active');
            }

            if($(this).hasClass('js-ratings')) {
                $(this).parent().parent().parent().find('div.body--active').removeClass('body--active');
                $(this).parent().parent().parent().find('div.js-ratings').toggleClass('body--active');
            }

            if($(this).hasClass('js-buy')) {
                $(this).parent().parent().parent().find('div.body--active').removeClass('body--active');
                $(this).parent().parent().parent().find('div.js-buy').toggleClass('body--active');
            }
        }


    });
});

// (function($) {
//     $(function() {
//         $('.header__item').on('click', '.header__item', function () {
//             $(this).addClass('header__item--active')
//             .siblings()
//             .removeClass("header__item--active")
//             .closest("div.body")
//             .find("div.body")
//             .removeClass("body--active")
//             .eq($(this).index())
//             .addClass("body--active");
//         });
//     });
// });