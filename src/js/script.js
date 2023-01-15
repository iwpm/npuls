$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 922,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ]



      });
  });
          