function clickedBox() {
    $("#contentContainer").css({ display: "flex" });
    $('body').animate({
        scrollTop: $("#contentContainer").offset().top
    }, 1000);
    
}



function closeOut() {
    $('body').animate({
        scrollTop: $(".mainContent").offset().top
    }, 1000);
    setTimeout(function () { $("#contentContainer").fadeOut() }, 1000);
}