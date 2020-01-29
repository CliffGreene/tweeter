$(document).ready(function(){
    $(".tweet-header").hover(function(){

      $(".shadow").css("visibility", "visible");
      $(".tweeter-handle").css("visibility", "visible");
     
    },function(){

        $(".shadow").css("visibility", "hidden");
        $(".tweeter-handle").css("visibility", "hidden");
       
      });            
});
/*
$("p").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
  */