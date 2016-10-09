$(document).ready(function() {
    var clear = function() {
        $("#about").removeClass("active");
        $("#about").removeClass("in");
        $("#dialogi").removeClass("active");
        $("#cytaty").removeClass("active");
        $("#liAbout").removeClass("active");
        $("#liCytaty").removeClass("active");
        $("#liDialogi").removeClass("active");
    };
    $('.showMain').click(function() {
        clear();
        $("#liAbout").addClass("active");
        $("#about").addClass("active");
        $("#about").addClass("in");
    });
    $('#showQuotes').click(function() {
        clear();
        $("#liCytaty").addClass("active");
        $("#cytaty").addClass("active");
        $("#cytaty").addClass("in");
    });
    $('#showDialogs').click(function() {
        clear();
        $("#liDialogi").addClass("active");
        $("#dialogi").addClass("active");
        $("#dialogi").addClass("in");
    });
    $('.scroll').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000);
        return false;
    });
});