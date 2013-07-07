var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function redirectPage(page){
  window.location = page;
}

function redirectFade(page){
  $("body").fadeOut(400, function(){
    redirectPage(page);        
  });
}
