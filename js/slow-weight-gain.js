$(document).ready(function () {
  $('#light-slider').lightSlider({
    item: 4,
    auto: true,
    loop: true,
    pauseOnHover: true,
    slideMove: 2,
    slideMargin: 20,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 10
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 0
        }
      }
    ]
  });
});
