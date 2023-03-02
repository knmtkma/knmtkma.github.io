$(function(){

  $(".openbtn").click(function () {
      $(".openbtn").toggleClass('active');
      $(".overlay").css("display","block");
      $(".side-navi").css("display","block");
  });
  $(".overlay").click(function(){
      $(this).css("display","none");
      $(".openbtn").toggleClass('active');
      $(".side-navi").css("display","none");
  });

  $(".feature").hover(function(){
    $(".feature-active").slideUp();
  },function(){
    $(".feature-active").slideDown();
  });

  $('.unit').hover(function(){
    $(this).css('border','solid 5px #414141');
  },function(){
    $(this).css('border','solid 1px #414141');
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $('.navi').fadeIn();
    }else{
      $(".navi").fadeOut();
    }
  });
  $('.navi').click(function(){
    $("html,body").animate({scrollTop:0});
  })



});
