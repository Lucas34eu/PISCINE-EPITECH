$(document).ready(function() {

    
    
    $( "p" ).click(function() {
        $( this ).toggleClass( "highlight" );
      });

      $( "p" ).on("mouseenter",function() {
        $( this ).toggleClass( "blue" );
      });

      $( "p" ).on("mouseleave",function() {
        $( this ).toggleClass( "blue" );
      });
    
       
        
    });
        
    
    



