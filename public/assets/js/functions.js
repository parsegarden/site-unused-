$(document).ready(function(){

$(".container").click(function(){
  $(".nav-wrap").hide();
});

});


//Scroll header

$(window).scroll(function () {
  if ( $(this).scrollTop() > 200 && !$('.fixed-header').hasClass('open') ) {
    $('.fixed-header').addClass('open');
    $('.fixed-header').slideDown();
   } else if ( $(this).scrollTop() <= 200 ) {
    $('.fixed-header').removeClass('open');
    $('.fixed-header').slideUp();
  }
});




//Expand search
$(document).ready(function(){
 
    $("#label").click(function(){
        $("input").addClass("focus");
    });

    $(".content").click(function(){
        $("input").removeClass("focus");
    });

});



//Mobile nav

$(function() {
  mobileNav();
});



function mobileNav() {
  $('.menu-link').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.menu-link, .nav-main').removeClass('is-open'); }
    else { $('.menu-link, .nav-main').addClass('is-open'); }
  });
}
