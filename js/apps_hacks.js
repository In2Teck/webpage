$(document).ready(init);

function init(){

  $("body").css("display", "none");
  $("body").fadeIn(400);
  $("#texto_calchupadora").fadeIn(400);

  $("#quienes_somos").click(redirectQuienes);
  $("#in2teck_main").click(redirectHome);
  $("#contacto").click(redirectContacto);
  $(".project").click(seleccionaMenu);
  $(".verdetalles").click(verDetalles);
  
  $("#slider-code").tinycarousel({ pager: true });
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
  $(".text_project").fadeOut(300);      
  $(".project").removeClass("selected");
  $("#"+event.currentTarget.id).addClass("selected");
  setTimeout(function(){
    $("#texto_"+event.currentTarget.id).fadeIn(300);
  }, 300);
}

function redirectHome() {
  $("body").fadeOut(400, function(){
    redirectPage("index.html?fi");        
  });  
}

function redirectQuienes() {
  $("body").fadeOut(400, function(){
    redirectPage("index.html?fi&quienes");        
  });  
}

function redirectContacto() {

}

function redirectPage(page){
  window.location = page;
}