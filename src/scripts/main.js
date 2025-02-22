// biome-ignore lint/complexity/useArrowFunction: <explanation>
$(document).ready(function () {

  $('.hero__container img').fadeIn(2000)

  $("#carousel").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    dots: true,
  });
  
// biome-ignore lint/complexity/useArrowFunction: <explanation>
  $(window).on("scroll", function() {
    const alturaTrailer = $('.trailer').height()
    const posicaoAtual = $(window).scrollTop()

    if (posicaoAtual > alturaTrailer) {
      $('.header').fadeIn()
    } else{
      $('.header').fadeOut()

    }
  })
});
