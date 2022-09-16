const sliderContainer = document.querySelector(".slider-container");
const menuBtn = document.querySelector("[data-menu]");
const closeBtn = document.querySelector("[data-close]");
const nav = document.querySelector('.nav')

$(".slider-container").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 1000,
});

$(".sponsor-slider-container").slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  autoplay: true,
  slidesToShow: 5,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

menuBtn.addEventListener('click', () => {
  nav.classList.remove('hide-nav')
})

closeBtn.addEventListener('click', () => {
  nav.classList.add('hide-nav')
})
