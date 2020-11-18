$(document).ready(function(){

  $(".change_btn").hover(function(){
    $(this).css("background","#161513");
    document.getElementById("Choose_Pic").style.color = "#FFFFFF";
  },function(){
      $(this).css("background","#FFFFFF");
      document.getElementById("Choose_Pic").style.color = "#161513";
  });

$(".picture_upload_icon").click(function () { $(".filess").click();});
$('.filess').change(function(){
         var file=$('.filess').val();
        $('.filetext').val(file);
     });

});
