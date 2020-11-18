$(document).ready(function(){

  $("button.button3").hover(function(){
    $(this).css("background","#161513");
    document.getElementById("StartG").style.color = "#FFFFFF";
  },function(){
      $(this).css("background","#FFFFFF");
      document.getElementById("StartG").style.color = "#161513";
  });

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
       });
  $("#Pic2").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue1.png";
       document.getElementById("Pic2").style.border = "2px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic3").style.border = "0px #161513 solid";
       document.getElementById("Pic4").style.border = "0px #161513 solid";
       });
  $("#Pic3").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue2.png";
       document.getElementById("Pic3").style.border = "2px #161513 solid";
       document.getElementById("Pic2").style.border = "0px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic4").style.border = "0px #161513 solid";
       });
  $("#Pic4").bind("click",function(){
       document.getElementById("ShowPic").src = "images/bigClue3.png";
       document.getElementById("Pic4").style.border = "2px #161513 solid";
       document.getElementById("Pic2").style.border = "0px #161513 solid";
       document.getElementById("Pic1").style.border = "0px #161513 solid";
       document.getElementById("Pic3").style.border = "0px #161513 solid";
       });
  $("#Love2").bind("click",function(){
        document.getElementById("Love2").src = "images/brown.png";
       });
  $("#Love3").bind("click",function(){
        document.getElementById("Love3").src = "images/brown.png";
       });
  });
