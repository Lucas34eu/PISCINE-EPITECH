$(document).ready(function() {


  $("select").change(function() {

      if ($("select").val() == "email") {

          $("input").attr("type", "email");
         

      } 
      
      else {

          $("input").attr("type", "text")
      }
      
  })

  $("button").click(function() {
      $("body").append("<div class=" + $("select").val() + ">" + $("input").val() + "</div>")

  })
});