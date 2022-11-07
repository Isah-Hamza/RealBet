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

const mainContainer = document.querySelector(".main-container");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const hamburger = document.querySelector("[data-menu]");
const closeMenu = document.querySelector("[data-close-menu]");
const loader = document.querySelector("[data-spinner]");
const dropdownToggler = document.querySelector("[data-dropdownToggler]");
const dropdown = document.querySelector("[data-dropdown]");

const notToggler = document.querySelector("[data-notToggler]");
const notDropdown = document.querySelector("[data-notDropdown]");

const placeBetBtn = document.querySelector("[data-placeBetBtn]");
const placeBetContainer = document.querySelector("[data-placeBetContainer]");
const betSlipBtn = document.querySelector("[data-betSlipBtn]");
const betSlipContainer = document.querySelector("[data-betSlipContainer]");

hamburger?.addEventListener("click", () => {
  mobileSidebar.classList.remove("hide-sidebar");
});
closeMenu?.addEventListener("click", () => {
  mobileSidebar.classList.add("hide-sidebar");
});

// deposit
const credit_debit = document.querySelector("[data-credit_debit]");
const bank_wire = document.querySelector("[data-bank_wire]");
const credit_debit_section = document.querySelector(
  "[data-credit_debit_section]"
);
const bank_wire_section = document.querySelector("[data-bank_wire_section]");
const upload_screenshot = document.querySelector("[data-payment_screenshot]");

// referral
const refer_link = document.querySelector("[data-refer_link]");
const copy_refer_link_btn = document.querySelector("[data-copy_refer_link]");

console.log(mainContainer);
console.log("spinner", loader);

document?.addEventListener("DOMContentLoaded", () => {
  mainContainer.classList.remove("hide");
  loader.classList.add("hide");
});

betSlipBtn?.addEventListener("click", () => {
  betSlipContainer.classList.remove("hide");
  placeBetContainer.classList.add("hide");
  betSlipBtn.classList.add("active-tab");
  placeBetBtn.classList.remove("active-tab");
});

placeBetBtn?.addEventListener("click", () => {
  placeBetContainer.classList.remove("hide");
  betSlipContainer.classList.add("hide");
  placeBetBtn.classList.add("active-tab");
  betSlipBtn.classList.remove("active-tab");
});

dropdownToggler?.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});

notToggler?.addEventListener("click", () => {
  notDropdown.classList.toggle("hide");
});

credit_debit?.addEventListener("click", function () {
  this.classList.add("active-method");
  bank_wire.classList.remove("active-method");
  credit_debit_section.classList.remove("hide");
  bank_wire_section.classList.add("hide");
});

bank_wire?.addEventListener("click", function () {
  this.classList.add("active-method");
  credit_debit.classList.remove("active-method");
  bank_wire_section.classList.remove("hide");
  credit_debit_section.classList.add("hide");
});

copy_refer_link_btn?.addEventListener("click", () => {
  navigator.clipboard.writeText(refer_link.textContent);
  alert("Referral link copied to clipboard");
});

upload_screenshot?.addEventListener("click", function () {
  console.log("hello");
  const file_input = upload_screenshot.querySelector("input");
  file_input.click();
});
