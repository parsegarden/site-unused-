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



