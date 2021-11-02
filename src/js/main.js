var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function scrollTo(elem, correction = 0) {
  window.scroll({
    left: 0,
    top: elem.offsetTop - correction,
    behavior: 'smooth'
  });
};

const scrollBtnForm = document.querySelector('.b-btn__scroll'),
      scrollBtnServices = document.querySelector('.b-menu__link_scroll-services'),
      scrollbtnPrices = document.querySelector('.b-menu__link_scroll-prices'),
      scrollBtnCompany = document.querySelector('.b-menu__link_scroll_about-company')

scrollBtnForm.addEventListener('click', () => {
  scrollTo(document.querySelector('.b-main__section_light-background'))
})

scrollBtnServices.addEventListener('click', () => {
  scrollTo(document.querySelector('.b-services'), 50)
})

scrollbtnPrices.addEventListener('click', () => {
  scrollTo(document.querySelector('.b-stack__card'), 100)
})

scrollBtnCompany.addEventListener('click', () => {
  scrollTo(document.querySelector('.b-benefits'), 50)
})
