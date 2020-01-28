$(document).ready(function(){
    $("textarea").on('keyup', function(){

        if (($(this).val().length) > 140) {
            $(".counter").text(140 - ($(this).val().length)).css("color", "red")
        }
        else {
        $(".counter").text(140 - ($(this).val().length))
        }
    });            
});