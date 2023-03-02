$(function(){
  $(".openbtn").click(function () {
      $(this).toggleClass('active');
      if($('.modal').hasClass('open')){
        $('.modal').removeClass('open');
      }else {
        $('.modal').addClass('open');
      }
  });

$("#offer").hover(function(){
  $("#offer").css(
    'background-color','white'
  );
  $("#offer").css(
    'color','#ed2626'
  );
},function(){
  $("#offer").css(
    'background-color','#ed2626');
    $("#offer").css(
      'color','white'
    );
});

$('#btn').hover(function(){
  $('#btn').css('width','436px');
  $('#btn').css('height','80px');
},function(){
    $('#btn').css('width','431px');
    $('#btn').css('height','75px');
});

$('.img-wrap img:nth-child(n+2)').hide();
     setInterval(function() {
       $(".img-wrap img:first-child").fadeOut(2000);
       $(".img-wrap img:nth-child(2)").fadeIn(2000);
       $(".img-wrap img:first-child").appendTo(".img-wrap");
     }, 4000);

    $(window).scroll(function(){
      $(".fadeIn").each(function(){
        var position=$(this).offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
        if (scroll > position-windowHeight+200){
          $(this).addClass('active');
        }
      })
    });

  $("#invitation-btn").hover(function(){
    $("#invitation-btn").css(
      'background-color','white');
    $("#invitation-btn").css(
      'color','#ed2626');
  },function(){
    $("#invitation-btn").css(
      'background-color','#ed2626');
    $("#invitation-btn").css(
      'color','white');
  });
});
