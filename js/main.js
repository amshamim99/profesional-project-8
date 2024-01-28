(function ($) {
"use strict";



// background-img//
$("[data-background]").each(function(){
	$(this).css("background-image","url(" + $(this).attr("data-background") +")")
})

  // sticky menu
$(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll <1) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });


// meanmenu//
$('#mobile-menu-active').meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: '.mobile-menu'
});


// scrollUp//
$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});


// slick-slider//
 function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
            nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
		        arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: true, arrows: false } },
               {
                breakpoint: 1200,
                settings: {
                 arrows: false,
                }
              },
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();



// service-active//
 $('.service-active').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// case-active//
  $('.case-active').slick({
  dots: false,
  infinite: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// testimonial-active//
  $('.testimonial-active').slick({
  dots: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: true,
  speed: 300,
  slidesToShow:1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  // brand-active//
  $('.brand-active').slick({
  dots: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: false,
  speed: 300,
  slidesToShow:6,
  autoplay:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 // magnificPopup//
$('.video-popup').magnificPopup({
  type: 'iframe'
  
});

 $('select').niceSelect();

})(jQuery);