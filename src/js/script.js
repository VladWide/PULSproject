$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
        responsiv: [
            {
                breakpoint: 992,
                sattings: {
                    arrows: false
                }
            }
        ]
    }
    );
  });