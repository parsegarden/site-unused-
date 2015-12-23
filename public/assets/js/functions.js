 function clientStuff(){

    $('.avatar-unit').first().addClass('active-avatar');
    $('.avatar-face').first().addClass('active-avatar');
   
    $('.avatar-photo').click(function(){
    var $this = $(this) ,
       $siblings = $this.parent().children(),
       position = $siblings.index($this);
       $(".avatar-unit").removeClass('active-avatar').eq(position).addClass('active-avatar');
       $siblings.removeClass('active-avatar');
       $this.addClass('active-avatar');

    });
    } 