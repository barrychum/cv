$('figure').addClass("next").first().removeClass("next").addClass("current");

setInterval(function() { 
  var nxt = $('figure.current')
    .removeClass("current")
    .addClass("prev")
    .next();
  if(nxt.length == 0) {
    
    nxt = $('figure:first');
    $('figure:gt(0)').addClass('next').removeClass('prev');
  }
  
    nxt.addClass("current")
    .removeClass("next");
},  2000);