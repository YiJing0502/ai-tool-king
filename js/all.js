function initSwiper() {
  /*recommand*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1, /*不足576px顯示單欄*/
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2, /*576p以上顯示雙欄*/
      slidesPerGroup: 2,
    },
    768: {/*768p以上顯示雙欄*/
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

}

/*header*/
initSwiper();

/*dropdown-btn*/
/* 開起選單 */
$(".navbar-btn").click(function () {
  $(".navbar-collapse").toggleClass("show");
});