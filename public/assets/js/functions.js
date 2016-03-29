$(document).ready(function(){

$(".container").click(function(){
  $(".nav-wrap").hide();
});

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




// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.post-action').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.post-action').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.post-action').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
