$(document).ready(function(){

$(".container").click(function(){
  $(".nav-wrap").hide();
});

});

$(window).scroll(function () {
  if ( $(this).scrollTop() > 200 && !$('header').hasClass('open') ) {
    $('header').addClass('open');
    $('header').slideDown();
   } else if ( $(this).scrollTop() <= 200 ) {
    $('header').removeClass('open');
    $('header').slideUp();
  }
});