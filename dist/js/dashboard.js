$(".single").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
});

$(".single-promotion").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2500,
});

const dropdownToggler = document.querySelector('[data-dropdownToggler]');
const dropdown = document.querySelector('[data-dropdown]');

dropdownToggler.addEventListener('click', () => {
    dropdown.classList.toggle('hide');
})