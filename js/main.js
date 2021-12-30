$(function () {

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('.slider__items').slick({
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          dots: false
        }
      },
    ]
  });

  var mixer = mixitup('.gallery__content');
});