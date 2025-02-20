// biome-ignore lint/complexity/useArrowFunction: <explanation>
$(document).ready(function () {
  $("#carousel").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    dots: true,
  });
});
