// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
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
