$(document).ready(init);

function init(){
  
  var pause = 100; 
  $(window).resize(function() {
      delay(function() {
      }, pause );
  });
  $(window).resize();

  $("body").css("display", "none");
  $("body").fadeIn(400);
  $("#in2teck_main").click(function(){
    redirectPage("index.html");
  });
  $("#apps_hacks").click(function(){
    redirectPage("calchupadora.html");
  });
}
