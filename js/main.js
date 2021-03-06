$(document).ready(init);

var stretch = { }

var unstretch = { }

var videoDisplay = { }

var newsHide = { }

var newsDisplay = { }

var wrapperHeight = { }

var wrapperWidth = { }

var iframe, player = null;

function muestraTexto() {
  $("#blank_bottom").css("height", "7em");
  $(".tagline").css("opacity", 0);
  $("#video").css({opacity: 0, height: 0, width: 0});
  $("#news").css(newsHide);
  $("#texto").css({opacity: 1, height: "auto", width: "auto"});
  $("#quienes_somos").addClass("selected");
  $(".t_bottom").css("display", "none");
  $("#wrapper").css(wrapperHeight);
  $("#content").css(stretch);
  player.api("pause");
}

function muestraVideo() {
  $("#blank_bottom").css("height", "0");
  $(".tagline").css("opacity", 1);
  $("#video").css(videoDisplay);
  $("#news").css(newsDisplay);
  $("#texto").css({opacity: 0, height: 0, width: 0});
  $(".nav_menu").removeClass("selected");
  $(".t_bottom").css("display", "block");
  $("#wrapper").css({height: "auto"});
  $("#content").css(unstretch);
}

function init(){

  iframe = $('#in2teck_player')[0];
  player = $f(iframe);

  if(location.search.indexOf("quienes") > -1){
    muestraTexto();
    $("body").css("display", "none");
    $("body").fadeIn(400);
  } else {
    $("body").css("display", "none");
    $("body").fadeIn(400);
  }

  loadGoogleAnalytics();

  var pause = 100; 
  $(window).resize(function() {
      delay(function() {
          var width = $(window).width();
          if( width <= 690 ) {
            stretch = {
              //"background-color": "#EFEFEF",
              height: "auto",
              margin: "-3em auto",
              padding: "0 0 1em 0",
              "text-align": "left",
              width: "auto"
            }
            unstretch = {
              //"background-color": "#FFFFFF",
              height: "10em",
              margin: "0 auto",
              padding: "0",
              "text-align": "center",
              width: "auto"
            }
            videoDisplay = {
              height: "10em",
              opacity: 1,
              width: "18em"
            }
            newsDisplay = {
              height: "18.2em",
              margin: "3em auto",
              opacity: 1,
              width: "14.5em",
              display: "block"
            }
            newsHide = {
              opacity: 0,
              height: 0,
              width: 0,
              margin: "0 0 0.5em 0",
              display: "none"
            }
            wrapperHeight = {
              height: "auto"
            }
          } else {
            stretch = {
              //"background-color": "#EFEFEF",
              height: "auto",
              margin: "-3em auto",
              padding: "1em",
              "text-align": "left",
              width: "auto"
            }
            unstretch = {
              //"background-color": "#EFEFEF",
              height: "18em",
              margin: "0 auto",
              padding: "0",
              "text-align": "center",
              width: "auto"
            }
            if (width <= 830) {
              videoDisplay = {
                height: "18em",
                opacity: 1,
                width: "22em"
              }
              wrapperHeight = {
                height: "29em"
              }
            } else {
              videoDisplay = {
                height: "18em",
                opacity: 1,
                width: "32em"
              } 
              wrapperHeight = {
                height: "26.2em"
              }
            } 
            newsDisplay = {
              height: "18.2em",
              margin: "4em 1em",
              opacity: 1,
              width: "14.5em",
              display: "inline-block"
            }
            newsHide = {
              opacity: 0,
              height: 0,
              width: 0,
              margin: "0 0 0.5em 0",
              display: "none"
            }
          }

          if($(".tagline").css("opacity") == "0"){
            $("#content").css(stretch);
            $("#news").css(newsHide);
            $("#wrapper").css(wrapperHeight);
          }else{
            $("#content").css(unstretch);
            $("#video").css(videoDisplay);
            $("#news").css(newsDisplay);
            $("#wrapper").css({height: "auto"});
          }

      }, pause );
  });
  $(window).resize();

  $("#quienes_somos").click(muestraTexto);
  $("#in2teck_main").click(muestraVideo);
  $("#contacto").click(function(){
    redirectPage("contacto.html");
  }); 

  fixMenu();
}
