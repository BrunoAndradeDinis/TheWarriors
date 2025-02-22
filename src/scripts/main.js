$(document).ready(function () {
  $(".header").hide();
  $(".hero__container__list").hide();

  // biome-ignore lint/complexity/useArrowFunction: <explanation>
  $(window).on("scroll", function () {
    const alturaTrailer = $(".trailer").height();
    const posicaoAtual = $(window).scrollTop();

    if (posicaoAtual > alturaTrailer) {
      $(".header").fadeIn();
      $(".header__container__nav").fadeOut();
    } else {
      $(".header").fadeOut(300);
    }
  });

  // biome-ignore lint/complexity/useArrowFunction: <explanation>
  $(".header__container__title").on("click", function (e) {
    e.preventDefault();
    $(".header__container__nav").toggle();
  });

  $(".hero__container img").fadeIn(2000);
  $(".hero__container__list").fadeIn(2000);

  $("#carousel").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          arrows: false,
          fade: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          fade: false,
        },
      },
    ],
  });
});
