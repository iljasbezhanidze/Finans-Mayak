var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// function anchor() {
//     const links = document.querySelectorAll('a[href*=#]')
//     for(elem of links) {
//         elem.addEventListener('click', function(e) {
//             e.preventDefault()

//         })
//     }
// }

function scrollTo(elem) {
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: 'smooth'
  });
};

document.querySelector('.b-scroll').addEventListener('click', () => {
  scrollTo(document.querySelector('.b-contacts'))
})
