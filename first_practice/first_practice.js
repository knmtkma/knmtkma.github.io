$(function){
  $("#scroll").click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $("html,body").animate({
        'scrollTop':position
      },500);
  });

    $("#submit").hover(function(){
      $("#submit"){
        background-color:#fff;
        color:#24292e;
      }
    },function(){
      background-color:#24292e;
      color:#fff;
    });




}
