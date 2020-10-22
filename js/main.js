$(document).ready(function(){
  $('.banner-slider').slick({
    arrows: false
  });
  $('.banner-slider-small').slick({
    arrows: false,
    dots: true,
    customPaging : function(slider, i) {
      if (i < 9) {
        return `<button>0${i+1}</button>`;
      } else {
        return `<button>${i+1}</button>`;
      }
    },
  });
});