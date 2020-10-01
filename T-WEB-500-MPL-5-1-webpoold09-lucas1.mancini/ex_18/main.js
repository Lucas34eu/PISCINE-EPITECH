$(document).ready(function() {
    $("select").change(function() {
        if ($("#sadd").val() == "email") {
            $("input").attr("type", "email");
        } else {
            $("input").attr("type", "text")
        }
    })

    $("#add").click(function() {
        $("body:first").append("<div class=" + $("select").val() + ">" + $("input").val() + "</div>")

    })


    $("#ssearch").change(function() {
        if ($("#ssearch").val() == "email") {
            $(".email").show();
            $(".note").hide();
            $(".todo").hide();
        } else if ($("#ssearch").val() == "note") {
            $(".email").hide();
            $(".note").show();
            $(".todo").hide();
        } else if ($("#ssearch").val() == "todo") {
            $(".email").hide();
            $(".note").hide();
            $(".todo").show();
        } else {
            $(".email").show();
            $(".note").show();
            $(".todo_").show();
        }
    })

    for (const uneDiv of $("div")) {
        if (!uneDiv.css("display") == "none") {
            $("#search").on("keyup", function() {
                $("div:contains(" + $(this).val() + ")").show();
                $("div:not(:contains(" + $(this).val() + "))").hide();

            });



        };
    }

    $("#search").on("keyup", function() {
        if ($(this).css("display") != "none") {
            $("div:contains(" + $(this).val() + ")").show();
            $("div:not(:contains(" + $(this).val() + "))").hide();
        }

    });
})