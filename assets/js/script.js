$(document).ready(function(){
    var h=screen.height;
    var ht=$('.block').height();
    $(window).scroll(function(){
       var scroll=$(window).scrollTop();
       //alert(scroll);
       if(scroll>=(ht))
       {
           $('#navbar').css('background-color','#ECF0F1');
       }
       else if(scroll<ht)
       {
           $('#navbar').css('background-color','#2C3E50');
       }
    });
    
    
});