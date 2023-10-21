var slides = new Swiper('.slides', {
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 800,
  pagination: {
    el: '.combo-hamburguers .control-pagination .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.combo-hamburguers .area-slides .btn.next ',
    prevEl: '.combo-hamburguers .area-slides .btn.prev'
  }
})