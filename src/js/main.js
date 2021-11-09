// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//anchor smooth scroll
document.addEventListener("DOMContentLoaded", () => {

  function scrollTo(elem, correction = 0) {
    window.scroll({
      left: 0,
      top: elem.offsetTop - correction,
      behavior: 'smooth'
    });
  };

  const scrollBtnServices = document.querySelector('.b-menu__link_scroll-services'),
    scrollbtnPrices = document.querySelector('.b-menu__link_scroll-prices'),
    scrollBtnCompany = document.querySelector('.b-menu__link_scroll_about-company')

  scrollBtnServices.addEventListener('click', () => {
    scrollTo(document.querySelector('.b-services'), 50)
  })

  scrollbtnPrices.addEventListener('click', () => {
    scrollTo(document.querySelector('.b-stack__card'), 100)
  })

  scrollBtnCompany.addEventListener('click', () => {
    scrollTo(document.querySelector('.b-benefits'), 50)
  })
});


//animate icon for succes submit
var animPhaseOne = 2000;
var animPhaseTwo = animPhaseOne + 750;

setTimeout(function () {
  document.getElementById('js-spinner').classList.add('--spinner-complete');
}, animPhaseOne);

setTimeout(function () {
  document.getElementById('js-success-tick').classList.add('--tick-complete');
}, animPhaseOne);

setTimeout(function () {
  document.getElementById('js-success-ring').classList.add('--ring-complete');
}, animPhaseOne);


//burger menu
const burger = document.querySelector('.b-burger')
const burgerContent = document.querySelector('.b-header__inner-mob')

burger.addEventListener('click', () => {
  burgerContent.classList.toggle('b-show');
  burger.classList.toggle('b-toggle');
  document.body.classList.toggle('b-fixed');
});

//range slider
// const rangeSliderForm1 = document.querySelector('.b-calculator__body_range')
// const rangeSliderTitle1 = document.querySelector('.b-range__title_documents')
// const rangeSliderInput1 = document.querySelector('.b-range__slider_documents')
// const rangeValue1 = rangeSliderInput1.value

// let rangeOutput1 = document.createElement("output"); 
// rangeSliderTitle1.appendChild(rangeOutput1)
// rangeOutput1.classList.add('b-range__output')
// rangeOutput1.setAttribute('for', 'select-length')
// rangeOutput1.setAttribute('name', 'level')

// rangeSliderForm1.addEventListener('oninput', function() {
//   rangeOutput1.innerHTML = rangeValue1
// })

