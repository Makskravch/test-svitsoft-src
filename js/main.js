$(document).ready(function(){

  let body = $('body')
  let menu = $('.menu')

  $('.js-btn-menu-toggle').on('click', function () {
    body.toggleClass('overflow')
    $(this).toggleClass('is-active')
    menu.toggleClass('is-open')
  })


  $('.banner-slider').slick({
    arrows: false
  });
  $('.banner-slider-small').slick({
    arrows: false,
    dots: true,
    draggable: false,
    swipe: false,
    customPaging : function(slider, i) {
      if (i < 9) {
        return `<button>0${i+1}</button>`;
      } else {
        return `<button>${i+1}</button>`;
      }
    },
  });
});
