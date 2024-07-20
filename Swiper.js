// var swiper = new Swiper('.swiper', {
//   slidesPerView: 4,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next-custom',
//     prevEl: '.swiper-button-prev-custom',
//   },
//   on: {
//     resize: function () {
//       console.log(getDirection())
//       swiper.changeDirection(getDirection());
//     },
//   },
// });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: getWidthMobile(),
  direction: getDirection(),
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  on: {
    resize: function () {
      getWidthMobile()
      console.log("check ", getWidthMobile())
      swiper.changeDirection(getDirection());
    },
  },
});
function getDirection() {
  var direction = window.innerWidth <= 412 ? 'vertical' : 'horizontal';
  return direction;
}
function getWidthMobile() {
  if (window.innerWidth <= 412) {
    return 1;
  }
  if (window.innerWidth <= 760) {
    return 2;
  }
  return 4;
}