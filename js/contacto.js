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

  $("#send_mail").click(sendMail);
}

function sendMail(){

  if ($("#form_nombre").val().length > 0 && $("#form_email").val().length > 0 && $("#form_asunto").val().length > 0) {

    var success = true;
    $.ajax({
      url: "php/send_mail.php",
      type: "GET",
      data: { nombre: $("#form_nombre").val(), email: $("#form_email").val(), body: $("#form_asunto").val() },
      error: function(){
        success = false;
      }
    });

    if(success) {
      alert("¡Gracias! Pronto nos pondremos en contacto.");
      $("#form_nombre").val("");
      $("#form_email").val("");
      $("#form_asunto").val("");
    } else {
      alert("Ocurrió un error, or favor envía un correo directamente a info@in2teck.com");
    }
  } else {
    alert("Por favor llena todos los campos.");
  }
}
