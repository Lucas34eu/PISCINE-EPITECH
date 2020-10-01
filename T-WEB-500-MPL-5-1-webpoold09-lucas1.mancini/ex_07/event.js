$(document).ready(function() {
    
    $("p").on("mouseenter",function() {
        
    

        $(this).css("background-color", "gray");
        
    }
    );
    $("p").on("mouseleave",function() {
        
    

        $(this).css("background-color", "white");
        
    }
    );



    $("p").click(function() {

        $(this).css("display", "none");
        
    })

}
)

