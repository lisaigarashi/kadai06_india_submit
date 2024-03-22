const beauty_img = '<img src= img/massage_woman.jpeg alt="美容画像">';
const foods_img = '<img src= img/south_indiancurry.jpeg alt="食べ物">';
const language_img='<img src = img/india-languages.jpg alt="言語分布図">'
const foods_img2='<img src=img/indiancurry_north.jpeg alt="北部の食べ物">';
$("#beauty_show").hide();
$("#foods_show").hide();


function GetMap1() {

  //1. Init
  map = new Bmap("#beauty_show");

  //2. map.startMap(lat, lon, "MapType", Zoom[1~20]);
  map.startMap(10.24251100286665,76.32627050478676, "load", 5);

  // 3.Add info box
  map.infobox(10.24251100286665,76.32627050478676, "ケララ州", "アーユルベーダの聖地");

  $("#beauty_show").show();
  
}


function GetMap2() {

  //1. Init
  map = new Bmap("#foods_show");

  //2. map.startMap(lat, lon, "MapType", Zoom[1~20]);
  map.startMap(23.0260101227138,77.317763424144, "load", 5);

  // 3.Add info box
  map.infobox(28.765767038280075,77.2840838291037, "ニューデリー", "首都・北部のカレー");
  map.infobox(10.24251100286665,76.32627050478676, "ケララ州", "南部のカレー");
  
  $("#foods_show").show();
}


$("#beauty").on("click", function () {
    // アーユルベーダをやっている女性の画像を表示
    $("#beauty1").html(beauty_img);
     $("#beauty_text").append('<p>'+"アーユルベーダなどの伝統的な伝統医療で心も体も癒されます"+'</p>');
     $("#beauty_text").append('<br>'+"特に南部のケララ州ではアーユルベーダを体験できる施設が充実しており、海を見ながら体験ができます。");

    // 地図としてアーユルベーダが有名な血をピンどめでテキストと画像で表示する
  GetMap1();
   $("#beauty").hide();
    $("#foods").hide();
    $("#language").hide();
    $("#music").hide();
    
    
});


$("#foods").on("click", function () {
    // カレーの画像と説明を表示()
    $("#foods1").html(foods_img2);
    $("#foods2").append(foods_img);
    $("#foods_text").append('<p>'+"インドの料理はスパイスを使った「カレー」と呼ばれるものですが有名です。"+'</p>');
     $("#foods_text").append('<br>'+"北部では付け合わせにチャパティを南部でも主にお米と一緒にたべます。");
     $("#foods_text").append('<br>'+"カレーは一般的に辛いとされますがスパイスも土地に寄って使用されるものが変わってきており、土地によって違います。");

    // 地図としてざっくり地域のカレーの絵を表示する
    

    GetMap2();
    $("#beauty").hide();
    $("#foods").hide();
  $("#language").hide();
    $("#music").hide();
});


$("#language").on("click", function () {
    //言語分布図を表示
    $("#language1").html(language_img);
    $("#language_text").append('<p>'+"インドの公用語はヒンディー語、準公用語は英語です。"+'</p>');
     $("#language_text").append('<p>'+"その他に各州独自の言葉があり、言語数は100以上と言われています。"+'</p>');
     $("#language_text").append('<br>'+"学校教育では公立の学校ではヒンディー語で、私立の学校では英語で授業が行われます。");
     $("#language_text").append('<br>'+"大学以上の高等教育では主に英語が使用され、ビジネスでは英語が共通言語になっています。");

    $("#beauty").hide();
    $("#foods").hide();
    $("#language").hide();
    $("#music").hide();
});


$("#music").on("click", function () {
    //bollywoodの画像の貼り付け
    //  $("#music_video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/sAzlWScHTc4?si=uZ_NbOSLlMCvaGJX" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write;encrypted-media;gyroscope;'+'picture-in-picture; web-share" allowfullscreen></iframe>');  
      
  $(function () {
    var w = $(window).width()
    var h = $(window).height()
   
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player('music_video', {
        width:500,
        height:500,
        videoId: 'sAzlWScHTc4',

        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
        });
        
        }
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.playVideo();
        }
        // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }

  });

  $("#music_text").append('<p>'+"インドでは映画と音楽が日常の中で非常に大切にされています。"+'</p>');
  $("#music_text").append('<p>'+"映画「RRR」は昨年のアカデミー賞で歌曲賞に選ばれ、日本でも踊られたりしました。"+'<p>');
  $("#music_text").append('<p>'+"アメリカの「ハリウッド」に文字られ、「ボリウッド」と呼ばれている北のムンバイでは一大産業になっています。"+'<p>');
  $("#music_text").append('<p>'+"インド国内でもテルグ語映画圏は売上を上げており、今後も注目されて来ることが予想されます。"+'<p>');

     $("#beauty").hide();
    $("#foods").hide();
    $("#language").hide();
    $("#music").hide();
});

$("#refresh").on("click",function(){
    location.reload();
});
