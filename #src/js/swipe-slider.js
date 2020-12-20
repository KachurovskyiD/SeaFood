// Slider

new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  }
})