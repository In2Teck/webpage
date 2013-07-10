$(document).ready(init);

var offset = { }

function init(){

  loadGoogleAnalytics();

  var _index = 1;
  var index = 1; 
  $.each( $(".project"), function(){
    if (this.classList.contains("selected")){
      _index = index;
      return;
    }
    index++;
  });

  $("#slider-code").width();
  var pause = 100; 
  $(window).resize(function() {
      delay(function() {
        var position = 1;
        var slider_width = $("#slider-code").width();
        if (slider_width < 691) {
          var ix = _index * 2 * 110;
          position = Math.floor(ix/slider_width) + 1;
          // Added additional li for more horizontal scrolling
          if ($("#extra").length < 1) {
            $(".overview").append("<li id='extra'></li>");
          }
        } else {
          $("#extra").remove();
        }
        offset = { start: position };
        $("#slider-code").tinycarousel(offset);
      }, pause );
  });
  $(window).resize();

  $("body").css("display", "none");
  $("body").fadeIn(400);
  $("#in2teck_main").click(function(){
    redirectPage("index.html");
  });
  $("#contacto").click(function(){
    redirectPage("contacto.html");
  });
  $(".project").click(seleccionaMenu);
  $(".verdetalles").click(verDetalles);
  
  $(".yoxview").yoxview();
}

function verDetalles(event){
  $("#"+event.currentTarget.id).fadeOut(300);
  if ( $("#"+event.currentTarget.id).data("detalles") ) {
    $("#details"+event.currentTarget.id).fadeOut(300);
    setTimeout(function(){
      $("#showcase"+event.currentTarget.id).fadeIn(300);
      $("#"+event.currentTarget.id).html("Ver detalles");
      $("#"+event.currentTarget.id).fadeIn(300);
    }, 300);
    $("#"+event.currentTarget.id).data("detalles", false)
  } else {
    $("#showcase"+event.currentTarget.id).fadeOut(300);
    setTimeout(function(){
      $("#details"+event.currentTarget.id).fadeIn(300);
      $("#"+event.currentTarget.id).html("Ver imágenes");
      $("#"+event.currentTarget.id).fadeIn(300);
    }, 300);
    $("#"+event.currentTarget.id).data("detalles", true)
  }
}

function seleccionaMenu(event) {
  redirectFade(event.currentTarget.id+".html");
}
