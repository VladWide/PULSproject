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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
          .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
      });

     function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
            })
        });
     };
     toggleSlide('.catalog-item__link');
     toggleSlide('.catalog-item__back');
  });