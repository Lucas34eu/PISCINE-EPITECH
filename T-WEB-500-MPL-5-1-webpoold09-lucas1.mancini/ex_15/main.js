$(document).ready(function() {
    


  $("button").click(function () {

    
    if ($("#listitem").val().match('^[a-zA-Z]+$')) { 

      
      $('ul').append('<li>'+$("#listitem").val()+'</li>');
      
  }})
    
       
        
    })
        
    
    



