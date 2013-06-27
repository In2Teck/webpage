$(document).on("ready", init);

function init(){

  $("body").css("display", "none");
  $("body").fadeIn(400);

  $("#quienes_somos").on("click", redirectQuienes);
  $("#in2teck_main").on("click", redirectHome);
  $("#contacto").on("click", redirectContacto);
  $(".project").on("click", seleccionaMenu);
}

function seleccionaMenu(event) {
  $(".project").removeClass("selected");
  $(".text_project").removeClass("showing");
  $("#"+event.currentTarget.id).addClass("selected");
  $("#texto_"+event.currentTarget.id).addClass("showing");
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
