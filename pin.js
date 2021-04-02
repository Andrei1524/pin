let box = document.querySelector('.projects-box-with-scroll')
let arrow = document.querySelector(".selector");
let section = document.querySelector(".projects-box-with-scroll section");
let boxOverlay = document.querySelector('#box-overlay')
let bottomStop = 170

if (window.innerWidth < 1200) {
  box = document.querySelector('.projects-box-without-scroll')
  section = document.querySelector(".project-col");
  arrow = document.querySelector(".selector-m");
  bottomStop = 0
}

let boxBottom = box.getBoundingClientRect().bottom - section.getBoundingClientRect().height
let boxTop = box.getBoundingClientRect().top
let stop = (box.getBoundingClientRect().top - 200);

window.onscroll = function (e) {
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop >= stop && scrollTop <= boxBottom) {
    arrow.classList.add('stick')
  } else if (scrollTop >= boxBottom) {
    arrow.classList.remove('stick')
  } else {
    arrow.classList.remove('stick')
  }

  if (scrollTop >= boxTop && scrollTop <= (boxBottom - bottomStop)) {
    boxOverlay.className = 'stick-box-overlay'
  } else if (scrollTop >= (boxBottom - bottomStop)) {
    boxOverlay.className = ''
  } else {
    boxOverlay.className = ''
  }
}
