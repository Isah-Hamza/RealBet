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
});

menuBtn.addEventListener('click', () => {
  nav.classList.remove('hide-nav')
})

closeBtn.addEventListener('click', () => {
  nav.classList.add('hide-nav')
})
