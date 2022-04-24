// // function onSubmit(token) {
// //   document.getElementById("demo-form").submit();
// // }

// // slick slider
// $('.your-class').slick();
// // slick slider
// $('.multiple-items').slick({
//   infinite: true,
//   arrows: false,
//   dots:true,
//   // autoplay: true,
//   // autoplaySpeed: 2750
// });

// // Tab
let loader = $(".loader-wrap");

$(window).on("load", function() {
    loader.addClass("loaded");
});

$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        asNavFor: '.slider-nav',
        autoplay: true,
        arrows: false
    });

    $('.slider-nav').slick({
        slidesToShow: 8,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1240,
            settings: {
                slidesToShow: 5,
                infinite: true,
                arrows: false,
            }
        }]
    });
});


$(document).ready(function() {
    $('.tashqireklama-for').slick({
        slidesToShow: 1,
        asNavFor: '.tashqireklama-nav',
        autoplay: true,
        arrows: false,
    });

    $('.tashqireklama-nav').slick({
        infinite: true,
        slidesToShow: 8,
        asNavFor: '.tashqireklama-for',
        focusOnSelect: true,
        arrows: true,
        responsive: [{
            breakpoint: 1179,
            settings: {
                slidesToShow: 5,
                infinite: true,
                arrows: false,
            }
        }]
    });
});

$(document).ready(function() {
    $('.aksessuar-for').slick({
        slidesToShow: 1,
        asNavFor: '.aksessuar-nav',
        autoplay: false,
        arrows: false,
    });

    $('.aksessuar-nav').slick({
        infinite: true,
        slidesToShow: 5,
        asNavFor: '.aksessuar-for',
        focusOnSelect: true,
        arrows: false,
    });
});


// $(document).ready(function() {
//   $('.avtotransport-for').slick({
//     slidesToShow: 1,
//     asNavFor: '.avtotransport-nav',
//     autoplay:true,
//     arrows:true
//   });

//   $('.avtotransport-nav').slick({
//     infinite: true,
//     slidesToShow: 8,
//     asNavFor: '.avtotransport-for',
//     focusOnSelect: true,
//     arrows:true
//   });
// });

// $(document).ready(function() {
//   $('.food-menu-for').slick({
//     slidesToShow: 1,
//     asNavFor: '.food-menu-nav',
//     autoplay:true,
//     arrows:true,
//   });

//   $('.food-menu-nav').slick({
//     infinite: true,
//     slidesToShow: 8,
//     asNavFor: '.food-menu-for',
//     focusOnSelect: true,
//     arrows:true
//   });
// });

$(document).ready(function() {
    $('.mobile__poligrafiya-for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });


});

$(document).ready(function() {
    $('.mobile__tashqi-reklama-for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });
});

$(document).ready(function() {

    $('.mobile__aksessuarlar-for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });
});

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [{
            breakpoint: 761,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            }
        }
    ]

});

$(".custom-btn").click(function() {
    $(".popup").toggleClass("active")
});

$(".popup__close").click(function() {
    $(".popup").removeClass("active")
});



$(document).ready(function() {
    $(".burger__menu, .opacity__bg").click(function(event) {
        $(".burger__menu, .nav__list, .opacity__bg").toggleClass("active");
    });
});

$(document).ready(function() {
    $(".burger__menu-title").click(function(event) {
        if ($(".nav__list").hasClass('one')) {
            $(".burger__menu-title").not($(this)).removeClass('active');
            $(".burger__menu-text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300);
    });
});

$(document).ready(function() {
    $(".menu__item-one, .menu__position-one").hover(function(event) {
        $(" .menu__position-one").stop().fadeToggle(300);
    });
});

$(document).ready(function() {
    $(".menu__item-two, .menu__position-two").hover(function(event) {
        $(" .menu__position-two").stop().fadeToggle(300);
    });
});

$(document).ready(function() {
    $(".menu__item-three, .menu__position-three").hover(function(event) {
        $(" .menu__position-three").stop().fadeToggle(300);
    });
});

$(document).ready(function() {
    $(".menu__item-fire, .menu__position-fire").hover(function(event) {
        $(" .menu__position-fire").stop().fadeToggle(300);
    });
});


s




// $(document).ready(function() {
//   $(".menu__item-two").hover(function(event) {
//     $(".menu__item-two, .menu__position-two").addClass("active");

//   });
// });