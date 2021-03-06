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



// anchor smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.remove('b-fixed');
    burgerContent.classList.remove('b-show');
    burger.classList.toggle('b-toggle');
    let href = this.getAttribute('href').substring(1)
    const scrollTarget = document.getElementById(href);
    const topOffset = 50
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})



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


//modals
let modalBtns = document.querySelectorAll('[data-modal]')
let modal = document.querySelectorAll('.b-modal')
let modalClose = document.querySelectorAll('.b-modal__close')
let modalReturn = document.querySelector('.b-return-submit')
let modalWrapper = document.querySelector('.b-modal__wrapper')
let succes = document.querySelector('.b-modal_call-back-succes')
let currentModal

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', function () {
    for (let n = 0; n < modal.length; n++) {

      modal[n].style.opacity = "0"
      if (this.dataset.modal == modal[n].id) {
        currentModal = modal[n]
        openModal()
        setTimeout(function () {
          modal[n].style.opacity = "1"
        }, 100)
      } else {
        modal[n].classList.remove('b-show-modal')
      }
      modalClose[n].addEventListener('click', closeModal)
      modalReturn.addEventListener('click', () => {
        closeModal()
        modal[0].classList.add('b-show-modal');
      })

      window.addEventListener('click', missClickClose)

      function missClickClose(e) {
        if (e.target == currentModal && e.target != modalWrapper) {
          closeModal()
          window.removeEventListener('click', missClickClose)
        }
      }

      function openModal() {
        currentModal.classList.add('b-show-modal');
        document.body.classList.add('b-fixed');
      }

      function closeModal() {
        document.body.classList.remove('b-fixed');
        modal[n].classList.remove('b-show-modal')
      }

      // validate
      let submit = document.querySelector('.b-btn_submit') //???????????? ????????????????
      let thisModalForm = modal[n].querySelector('.b-form') //??????????
      let thisoModalInput = modal[n].querySelector('.b-modal__input_tell') //??????????
      let thisModalCheckbox = modal[n].querySelector('.b-submit__checkbox') //??????????????
      let checkboxValid = false
      let inputValid = false

      thisModalForm.addEventListener('change', function() {
        checkboxValid == true  && inputValid == true  ? submit.disabled = "false" : submit.disabled = "true"
        console.log(checkboxValid == inputValid)

        submit.addEventListener('click', function() {
          closeModal()
          succes.classList.add('b-show-modal')
        })
      })

      thisoModalInput.onchange = function() {
        this.value.length > 10 && this.value.length < 14 ? inputValid = 'true' : inputValid = 'false'
      }

      thisModalCheckbox.onclick = function () {
        this.checked ? checkboxValid = 'true' : checkboxValid = 'false'
      }
    }
  })
}


//QUIZ CALCULATOR--------------------------------------------------------------------------------
const calculatorWindows = document.querySelectorAll('.b-calculator')
const calculatorBtn = document.querySelectorAll('[data-calculator]')
const btnsNext = document.querySelectorAll('.b-calculator__btn-next')
const btnsPrev = document.querySelectorAll('.b-calculator__return-btn, .b-return-btn__title')
const btnsClose = document.querySelectorAll('.b-calculator__close-btn, .b-close-btn__title')

let arrWindows = []
let indexWindow = 0

// crete arroy with all windows of calculator
document.addEventListener('DOMContentLoaded', () => {
  function pushWindows() {
    for (let firstWindow = 0; firstWindow <= calculatorWindows.length; firstWindow++) {
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
  arrWindows[indexWindow].style.opacity = "0"
  indexWindow = 0
  arrWindows[indexWindow].classList.add('b-show-calc')
  document.body.classList.add('b-fixed');
  setTimeout(function () {
    arrWindows[indexWindow].style.opacity = "1"
  }, 100)
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
function nextBtnCalc() {
  for (let currentBtnNext = 0; currentBtnNext < btnsNext.length; currentBtnNext++) {
    btnsNext[currentBtnNext].removeAttribute('disabled')
    btnsNext[currentBtnNext].addEventListener('click', function () {
      calculatorWindows[indexWindow].classList.remove('b-show-calc')
      indexWindow++
      calculatorWindows[indexWindow].classList.add('b-show-calc')
    })
  }
}

//button prev
for (let currentBtnPrev of btnsPrev) {
  currentBtnPrev.addEventListener('click', function () {
    calculatorWindows[indexWindow].classList.remove('b-show-calc')
    indexWindow--
    calculatorWindows[indexWindow].classList.add('b-show-calc')
  })
}

//validate
// let parent = document.querySelectorAll('.b-calculator__body')
// let radio = clickAnswer(parent[indexWindow].querySelectorAll('.b-calculator-card__check'))
// let range = changeRange(parent[indexWindow].querySelectorAll('.b-range__slider'))


// function clickAnswer(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener('click', () => {
//       nextBtnCalc()
//     })
//   }
// }

// function changeRange(elem) {
//   if (elem.value > 0) {
//     nextBtnCalc()
//   }
// }
