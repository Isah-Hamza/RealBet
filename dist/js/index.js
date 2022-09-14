const sliderContainer = document.querySelector(".slider-container");
const nextSlick = document.querySelector(".slick-next");
const prevSlick = document.querySelector(".slick-prev");
$(".slider-container").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 500,
});

const customAutoplay = () => {
  setInterval(() => {
    nextSlick.click();
  }, 500);
};

customAutoplay()

console.log(sliderContainer);
