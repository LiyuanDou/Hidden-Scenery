$(document).ready(function(){

  $("#button_register").hover(function() {
    $(this).css("background", "#559900");
  }, function() {
    $(this).css("background", "#9CDA1E");
  });

  $("button.button3").hover(function(){
    $(this).css("background","#161513");
    document.getElementById("StartG").style.color = "#FFFFFF";
  },function(){
      $(this).css("background","#FFFFFF");
      document.getElementById("StartG").style.color = "#161513";
  });
  $("button.button3").click(function () {alert("SIGN UP SUCCESSFULLY!");});

  $(".change_btn").hover(function(){
    $(this).css("background","#161513");
    document.getElementById("Choose_Pic").style.color = "#FFFFFF";
  },function(){
      $(this).css("background","#FFFFFF");
      document.getElementById("Choose_Pic").style.color = "#161513";
  });

  $(".send_btn").hover(function() {
    $(this).css("background", "#845D23");
  }, function() {
    $(this).css("background", "#B2803E");
  });
  $(".send_btn").click(function () {alert("SEND SUCCESSFULLY!");});
  $(".change_btn").click(function () { $(".filess").click(); });
  $('.filess').change(function(){
           var file=$('.filess').val();
          $('.filetext').val(file);
       });

  $("#Pic1").bind("click",function(){
       document.getElementById("ShowPic").src = "images/cathedral.png";
       document.getElementById("Pic1").style.border = "2px #161513 solid";
       document.getElementById("Pic2").style.border = "0px #161513 solid";
       document.getElementById("Pic3").style.border = "0px #161513 solid";
       document.getElementById("Pic4").style.border = "0px #161513 solid";
        $("#Details").text(" The church stands out from the neat buildings by the lake. The arched roof is dark green and pointed. ");
       });
  $("#Pic2").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue1.png";
       document.getElementById("Pic2").style.border = "2px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic3").style.border = "0px #161513 solid";
       document.getElementById("Pic4").style.border = "0px #161513 solid";
        $("#Details").text("Clue: In front of a pile of ornate sculptures, one of the most prominent is a cyan mottled human figure with a necklace and a focused gaze.");
       });
  $("#Pic3").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue2.png";
       document.getElementById("Pic3").style.border = "2px #161513 solid";
       document.getElementById("Pic2").style.border = "0px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic4").style.border = "0px #161513 solid";
         $("#Details").text("Clue: The dome of the church is very ornate, studded with flower shapes and lights. Sky-blue columns also studded with lights run from the ground to the dome.");
       });
  $("#Pic4").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue3.png";
       document.getElementById("Pic4").style.border = "2px #161513 solid";
       document.getElementById("Pic2").style.border = "0px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic3").style.border = "0px #161513 solid";
        $("#Details").text("Clue: Inside the cathedral, the deep walls have beautiful flowered Windows, printed with colorful classical figures. Sunlight streams in through the window and falls on the bench.");
       });
  $("#Love2").bind("click",function(){
        document.getElementById("Love2").src = "images/brown.png";
       });
  $("#Love3").bind("click",function(){
        document.getElementById("Love3").src = "images/brown.png";
       });
  });
