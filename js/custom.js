$(function () {
'use strict';    
    
    
    
    var windo = $(window);
    
    //Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click',function (){
        $('.navbar-collapse').collapse('hide');
    });


    $(function () {
  $('[data-toggle="popover"]').popover()
})
    $(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})



    //banner_slider
    $('.cetagory_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots:false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }

        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }

        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });



    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 25
                }, 1500, );
                return false;
            }
        }
    });




    //back-to-top
    var html_body = $('html, body');
    $('.back-top a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500, );
                return false;
            }
        }
    });






});