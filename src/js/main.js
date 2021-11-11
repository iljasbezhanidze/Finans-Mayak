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



// let modalBtns = document.querySelectorAll('[data-modal]')
// let modal = document.querySelectorAll('.b-modal')

// for (let i = 0; i < modalBtns.length; i++) {
//   modalBtns[i].addEventListener('click', function() {
//     if(this.dataset.modal == modal[i].id) {
//       modal[i].classList.add('b-show-modal')
//       console.log(this)
//     }
//   })
// }



//QUIZ CALCULATOR--------------------------------------------------------------------------------
const calculatorWindows = document.querySelectorAll('.b-calculator')
const calculatorBtn = document.querySelectorAll('[data-calculator]')
const btnsNext = document.querySelectorAll('.b-calculator__btn-next')
const btnsPrev = document.querySelectorAll('.b-calculator__return-btn')
const btnsClose = document.querySelectorAll('.b-calculator__close-btn')

let arrWindows = []
let indexWindow = 0

// crete arroy with all windows of calculator
document.addEventListener('DOMContentLoaded', () => {
  function pushWindows() {
    for (let firstWindow = 0; firstWindow < calculatorWindows.length - 1; firstWindow++) {
      arrWindows.push(calculatorWindows[firstWindow])
    }
  }
  pushWindows()
})

// open calculator
for (let thisBtn of calculatorBtn) {
  thisBtn.addEventListener('click', openFirstWindow)
}

function openFirstWindow() {
  arrWindows[indexWindow].classList.add('b-show-calc')
  document.body.classList.add('b-fixed');
}

//close calculator
for (let thisBtn of btnsClose) {
  thisBtn.addEventListener('click', closeCalc)
}

function closeCalc() {
  for (let index of arrWindows) {
    index.classList.remove('b-show-calc')
    document.body.classList.remove('b-fixed');
  }
  indexWindow = 0
}

//button next
for (let currentBtnNext of btnsNext) {
  currentBtnNext.addEventListener('click', function () {
    calculatorWindows[indexWindow].classList.remove('b-show-calc')
    indexWindow++
    calculatorWindows[indexWindow].classList.add('b-show-calc')
  })
}

//button prev
for (let currentBtnPrev of btnsPrev) {
  currentBtnPrev.addEventListener('click', function () {
    calculatorWindows[indexWindow].classList.remove('b-show-calc')
    indexWindow--
    calculatorWindows[indexWindow].classList.add('b-show-calc')
  })
}



