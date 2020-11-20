$(document).ready(function(){

  $("#button_register").hover(function() {
    $(this).css("background", "#559900");
  }, function() {
    $(this).css("background", "#9CDA1E");
  });
  
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
