$(document).ready(function(){

  $("#button_register").hover(function() {
    $(this).css("background", "#559900");
  }, function() {
    $(this).css("background", "#9CDA1E");
  });

  $(".button_contribute").hover(function() {
    $(this).css("background", "#845D23");
  }, function() {
    $(this).css("background", "#B2803E");
  });

  $(".banner_text").mouseenter(function(){
    $("#Float").fadeIn() ;
      $(this).css("text-decoration", "underline");
  });
  $(".banner_text").mouseleave(function(){
   $("#Float").fadeOut();
     $(this).css("text-decoration", "none");
  });
});
