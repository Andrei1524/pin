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
