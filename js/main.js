$(document).on("ready", init);

var stretch = { }

var unstretch = { }

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function muestraTexto() {
  $("#blank_bottom").css("height", "8em");
  $(".tagline").css("opacity", 0);
  $("#video").css({opacity: 0, height: "0", width: "0"});
  $("#texto").css({opacity: 1, height: "auto", width: "auto"});
  $("#quienes_somos").addClass("selected");
  $(".t_bottom").css("display", "none");
  $("#content").css(stretch);
}

function muestraVideo() {
  $("#blank_bottom").css("height", "0");
  $(".tagline").css("opacity", 1);
  $("#texto").css({opacity: 0, height: "0", width: "0"});
  $("#video").css({opacity: 1, height: "auto", width: "auto"});
  $(".nav_menu").removeClass("selected");
  $(".t_bottom").css("display", "block");
  $("#content").css(unstretch);
}

function redirectApps() {
  $("body").fadeOut(400, function(){
    redirectPage("apps_hacks.html");        
  });  
}

function redirectContacto() {

}

function redirectPage(page){
  window.location = page;
}

function init(){

  var pause = 100; 

  $(window).resize(function() {
      delay(function() {
          var width = $(window).width();
          if( width <= 730 ) {
            stretch = {
              height: "auto",
              margin: "-3em auto"
            }
            unstretch = {
              height: "13em",
              margin: "0 auto"
            }
          } else {
            stretch = {
              height: "auto",
              margin: "-3em auto"
            }
            unstretch = {
              height: "18em",
              margin: "0 auto"
            }
          }
      }, pause );
  });
  $(window).resize();

  $("#quienes_somos").on("click", muestraTexto);
  $("#in2teck_main").on("click", muestraVideo);
  $("#apps_hacks").on("click", redirectApps);
  $("#contacto").on("click", redirectContacto);

  if(location.search.contains("fi")){
    $("body").css("display", "none");
    $("body").fadeIn(400);
  }

  if(location.search.contains("quienes")){
    $("body").css("display", "none");
    $("body").fadeIn(400, muestraTexto);
  }
}
