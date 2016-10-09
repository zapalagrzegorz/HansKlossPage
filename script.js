$(document).ready(function() {
    var clear = function() {
        $("#aboutSeries").removeClass("active");
        $("#aboutSeries").removeClass("in");
        $("#hans").removeClass("active");
        $("#dialogi").removeClass("active");
        $("#cytaty").removeClass("active");
        $("#pillAboutSeries").removeClass("active");
        $("#pillHans").removeClass("active");
        $("#pillCytaty").removeClass("active");
        $("#pillDialogi").removeClass("active");
    };
    $('.showMain').click(function() {
        clear();
        $("#pillAboutSeries").addClass("active");
        $("#aboutSeries").addClass("active");
        $("#aboutSeries").addClass("in");
    });
    $('#showHans').click(function() {
        clear();
        $("#pillHans").addClass("active");
        $("#hans").addClass("active");
        $("#hans").addClass("in");
    });
    $('#showQuotes').click(function() {
        clear();
        $("#pillCytaty").addClass("active");
        $("#cytaty").addClass("active");
        $("#cytaty").addClass("in");
    });
    $('#showDialogs').click(function() {
        clear();
        $("#pillDialogi").addClass("active");
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