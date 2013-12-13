$(document).ready(init);

var offset = { }

function init(){

  loadGoogleAnalytics();

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

  fixMenu();
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
