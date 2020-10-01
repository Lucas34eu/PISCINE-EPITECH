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

  

  $("#marecherche").change(function() {
      

    if ($("#marecherche").val() == "email") {

        $(".note").hide();
        $(".todo_").hide();
        $(".email").show();

    } 
    else if ($("#marecherche").val() == "note")
    {
        $(".note").show();
        $(".todo_").hide();
        $(".email").hide();
    }

    else if ($("#marecherche").val() == "todo_")
    {
        $(".note").hide();
        $(".todo_").show();
        $(".email").hide();
    }

    else
    {
        $(".email").show();
        $(".todo_").show();
        $(".note").show();
    }

  })


});