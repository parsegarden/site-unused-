$(function() {
  clientStuff();
  analyzeCompetition();

});

function clientStuff() {

  $('.avatar-face, .avatar-button, .avatar-logo-3').click(function() {
    var $this = $(this),
        position = $this.parent().children().index($this);

    $('.avatar-unit').removeClass('active-avatar').eq(position).addClass('active-avatar');
    $('.avatar-face').removeClass('active-avatar').eq(position).addClass('active-avatar');
    $('.avatar-button').removeClass('active-avatar').eq(position).addClass('active-avatar');
    $('.avatar-logo-3').removeClass('active-avatar').eq(position).addClass('active-avatar');
  });


}

function analyzeCompetition() {

  $('.analize-info-list, .analyze-button').click(function() {
    var $this = $(this),
        position = $this.parent().children().index($this);

    $('.analyze-unit-info').removeClass('active-analyze').eq(position).addClass('active-analyze');
    $('.analize-info-list').removeClass('active-analyze').eq(position).addClass('active-analyze');
    $('.analyze-button').removeClass('active-analyze').eq(position).addClass('active-analyze');
  });

}

$(function() {
   $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });

});

$(window).scroll(function(){

 var iScroll = $(this).scrollTop();

   if(iScroll > $('.parallax1').offset().top - $(window).height()){

    var offset = (Math.min(0, iScroll - $('.feature').offset().top +$(window).height() - 350)).toFixed();

    $('.feature-img').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});


  }

  if(iScroll > $('.parallax2').offset().top - $(window).height()){

    var offset = (Math.min(0, iScroll - $('.feature-b').offset().top +$(window).height() - 350)).toFixed();

    $('.feature-b-img').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
 
 if(iScroll > $('.winning-stragies').offset().top - $(window).height()){

    var offset = (Math.min(0, iScroll - $('.winning-stragies--content').offset().top +$(window).height() - 350)).toFixed();

    $('.parallax3').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.parallax4').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
if(iScroll > $('.feature-3-section').offset().top - $(window).height()){

    
    console.log(hi)

  }
 
 });

