$(document).ready(init);

var stretch = { }

var unstretch = { }

var videoDisplay = { }

function muestraTexto() {
  $("#blank_bottom").css("height", "7em");
  $(".tagline").css("opacity", 0);
  $("#video").css({opacity: 0, height: "0", width: "0"});
  $("#texto").css({opacity: 1, height: "auto", width: "auto"});
  $("#quienes_somos").addClass("selected");
  $(".t_bottom").css("display", "none");
  $("#content").css(stretch);
  $("video")[0].pause();
}

function muestraVideo() {
  $("#blank_bottom").css("height", "0");
  $(".tagline").css("opacity", 1);
  $("#video").css(videoDisplay);
  $("#texto").css({opacity: 0, height: "0", width: "0"});
  $(".nav_menu").removeClass("selected");
  $(".t_bottom").css("display", "block");
  $("#content").css(unstretch);
}

function init(){

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
          if( width <= 740 ) {
            stretch = {
              "background-color": "#EFEFEF",
              height: "auto",
              margin: "-3em auto",
              padding: "1em",
              "text-align": "left"
            }
            unstretch = {
              "background-color": "#FFFFFF",
              height: "13em",
              margin: "0 auto",
              padding: "0",
              "text-align": "center"
            }
            videoDisplay = {
              height: "10em",
              opacity: 1,
              width: "auto"
            }
          } else {
            stretch = {
              "background-color": "#EFEFEF",
              height: "auto",
              margin: "-3em auto",
              padding: "1em",
              "text-align": "left"
            }
            unstretch = {
              "background-color": "#FFFFFF",
              height: "18em",
              margin: "0 auto",
              padding: "0",
              "text-align": "center"
            }
            videoDisplay = {
              height: "18em",
              opacity: 1,
              width: "auto"
            }
          }

          if($(".tagline").css("opacity") == "0"){
            $("#content").css(stretch);
          }else{
            $("#content").css(unstretch);
            $("#video").css(videoDisplay);
          }

      }, pause );
  });
  $(window).resize();

  $("#quienes_somos").click(muestraTexto);
  $("#in2teck_main").click(muestraVideo);
  $("#apps_hacks").click(function(){
    redirectPage("calchupadora.html");
  });
  $("#contacto").click(function(){
    redirectPage("contacto.html");
  });

}
