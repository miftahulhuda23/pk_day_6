$(document).ready(function () {
    $("#fade").click(() => {
        $("#panel-fade").fadeIn()
    })

    $("#FadeOut").click(() => {
        $("#panel-fade-out").fadeOut()
    })

    $("#FadeToogle").click(() => {
        $("#panel-fade-toogle").fadeToggle()
    })

    $("#flip").click(() => {
        $("#panel").slideDown("slow")
    })

    $("#toogle").click(() => {
        $("#panel-toogle").slideToggle()
    })

    $("#hideshow").click(() => {
        if ($("#panel-hideshow").is(":visible")) {
            $("#panel-hideshow").hide();
        } else {
            $("#panel-hideshow").show();
        }
    })

    let defaultSize = $("#panel-animation").css("font-size");
    $("#animation").click(() => {
        let fontSize = "1em",
            color = "#ff0000";

        if ($("#panel-animation").css("font-size") == defaultSize) {
            fontSize = "4em";
            color = "#ff0000";
        }

        $("#panel-animation").animate(
            {
                "font-size": fontSize,
            })
            .css("color", color)
    })
})