  $(function(){

    var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定
		style: {//天地中央に配置
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.2rem',
			color:'#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  


    $(".openbtn").click(function(){
    $(this).toggleClass("active");
    if($('.left-list').hasClass('activate')){
      $('.left-list').removeClass('activate');
    }else {
      $('.left-list').addClass('activate');
    }
  });
  $(".return").click(function(){
    $('.left-list').removeClass('activate');
  });
    $(".word").click(function(){
      var id=$(this).attr('href');
      var position=$(id).offset().top;
      $("html,body").animate({
          'scrollTop':position
        },500);
    });


    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
        $('.top').fadeIn();
      }else{
        $(".top").fadeOut();
      }
    });
    $('.top').click(function(){
      $("html,body").animate({scrollTop:0});
    });

      $(window).scroll(function (){
          $('.fadeIn').each(function(){
              var position = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > position - windowHeight + 100){
                $(this).addClass('active');
              }
          });
      });

    $(window).scroll(function(){
      $(".word").each(function(){
        var position = $(".heading").offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight=$(window).height();
        if (scroll > position - windowHeight + 700){
          $(".word").css('color','black');
        }else{
          $(".word").css('color','white');
        }
      })
    });

    $(".fa-brands").hover(function(){
      $(this).addClass("fa-9x");
      $(this).removeClass("fa-8x");
    },function(){
      $(this).addClass("fa-8x");
      $(this).removeClass("fa-9x");
    });


  });
