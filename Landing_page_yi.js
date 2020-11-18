$(document).ready(function(){

  $("button.button3").hover(function(){
    $(this).css("background","#161513");
    document.getElementById("StartG").style.color = "#FFFFFF";
  },function(){
      $(this).css("background","#FFFFFF");
      document.getElementById("StartG").style.color = "#161513";
  });

  $("#StartG").click(function(){
    window.parent.frames.location.href="Detail_page.html"
  });

  $("#ClueImg1").mouseenter(function(){
    $("#Float1").fadeIn() ;
 });
 $("#ClueImg1").mouseleave(function(){
   $("#Float1").fadeOut();
});

$("#ClueImg2").mouseenter(function(){
  $("#Float2").fadeIn() ;
});
$("#ClueImg2").mouseleave(function(){
 $("#Float2").fadeOut();
});

$("#ClueImg3").mouseenter(function(){
  $("#Float3").fadeIn() ;
});
$("#ClueImg3").mouseleave(function(){
 $("#Float3").fadeOut();
});
});
