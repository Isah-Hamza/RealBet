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

const dropdownToggler = document.querySelector("[data-dropdownToggler]");
const dropdown = document.querySelector("[data-dropdown]");

const notToggler = document.querySelector("[data-notToggler]");
const notDropdown = document.querySelector("[data-notDropdown]");

const placeBetBtn = document.querySelector("[data-placeBetBtn]");
const placeBetContainer = document.querySelector("[data-placeBetContainer]");
const betSlipBtn = document.querySelector("[data-betSlipBtn]");
const betSlipContainer = document.querySelector("[data-betSlipContainer]");

// deposit
const credit_debit = document.querySelector("[data-credit_debit]");
const bank_wire = document.querySelector("[data-bank_wire]");
const credit_debit_section = document.querySelector(
  "[data-credit_debit_section]"
);
const bank_wire_section = document.querySelector("[data-bank_wire_section]");

betSlipBtn.addEventListener("click", () => {
  betSlipContainer.classList.remove("hide");
  placeBetContainer.classList.add("hide");
  betSlipBtn.classList.add("active-tab");
  placeBetBtn.classList.remove("active-tab");
});

placeBetBtn.addEventListener("click", () => {
  placeBetContainer.classList.remove("hide");
  betSlipContainer.classList.add("hide");
  placeBetBtn.classList.add("active-tab");
  betSlipBtn.classList.remove("active-tab");
});

dropdownToggler.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});

notToggler.addEventListener("click", () => {
  notDropdown.classList.toggle("hide");
});

credit_debit.addEventListener("click", function () {
  this.classList.add("active-method");
  bank_wire.classList.remove("active-method");
  credit_debit_section.classList.remove("hide");
  bank_wire_section.classList.add("hide");
});

bank_wire.addEventListener("click", function () {
  this.classList.add("active-method");
  credit_debit.classList.remove("active-method");
  bank_wire_section.classList.remove("hide");
  credit_debit_section.classList.add("hide");
});
