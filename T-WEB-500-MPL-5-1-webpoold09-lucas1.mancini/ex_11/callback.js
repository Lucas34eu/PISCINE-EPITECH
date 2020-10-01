$(document).ready(function() {

    var rexou = "";
    
    $("button").click(function () {

        rexou= $("#listitem").val();

        $('body').after('<div>'+rexou+'</div>');
        
    });
    


})  
