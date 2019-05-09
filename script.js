$("p").hide(); {}
$(".zwerd").click(function() {
    var one = $(".jq").val();
    var two = $(".jc").val();
    $("p").show();
    if (one <= 10 && two === "Yes") {
        $("p").text("You have killed the Minecraft Creatures project!");
    } else if (one >= 10 && two === "Yes") {
        $("p").text("You have killed the USA World War 2 ships project!");
    } else if (one <= 10 && two === "No") {
        $("p").text("You have killed the JoJo characters project!");
    } else if (one >= 10 && two === "No") {
        $("p").text("You have killed the Lionel Model Trains project!");
    } else {
        $("p").text("What?");
    }
});