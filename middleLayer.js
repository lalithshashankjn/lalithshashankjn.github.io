let containerWidth;
let containerHeight;
let dontReadMouse = false;

function mouseOnCircle(tOrF) {
    if (tOrF) {
        dontReadMouse = true;
    }
    else {
        dontReadMouse = false;
    }
}

function setSizes() {
    containerWidth = $(".mainContent").width();
    containerHeight = $(".mainContent").height();         
    if ((containerWidth < containerHeight)) {
        $("#centreBall").height(containerWidth);
        $("#centreBall").width(containerWidth);
        
    }
    else if ((containerWidth > containerHeight)) {
        $("#centreBall").width(containerHeight);
        $("#centreBall").height(containerHeight);
       
    }
    else {
        $("#centreBall").width(containerWidth);
        $("#centreBall").height(containerHeight);
        
    }   
    $("#contentContainer").width(containerWidth);
    $("#contentContainer").height(containerHeight);
    $(".mainContent").css("display", "flex");        
}

function showOrHide(event) {
    
    if (!dontReadMouse) {
        var x = event.clientX;
        var y = event.clientY;
        var coords = "X coords: " + x + ", Y coords: " + y;
        if ((x < (0.5 * containerWidth)) && (y < (0.5 * containerHeight))) {
            setOpacities(1, 0, 0, 0);
        }
        else if ((x > (0.5 * containerWidth)) && (y < (0.5 * containerHeight))) {
            //TR
            setOpacities(0, 1, 0, 0);
        }
        else if ((x < (0.5 * containerWidth)) && (y > (0.5 * containerHeight))) {
            //BL
            setOpacities(0, 0, 1, 0);
        }
        else if ((x > (0.5 * containerWidth)) && (y > (0.5 * containerHeight))) {
            //BR
            setOpacities(0, 0, 0, 1);
        }
    }
    else {
        setOpacities(0, 0, 0, 0);
    }
}

function setOpacities(tl, tr, bl, br) {    
    if (tl == 1) {
        $('#TL').css({ opacity: '1' });
    }
    else {
        $('#TL').css({ opacity: '0' });
    }
    if (tr == 1) {
        $('#TR').css({ opacity: '1' });
    }
    else {
        $('#TR').css({ opacity: '0' });
    }
    if (bl == 1) {
        $('#BL').css({ opacity: '1' });
    }
    else {
        $('#BL').css({ opacity: '0' });
    }
    if (br == 1) {
        $('#BR').css({ opacity: '1' });
    }
    else {
        $('#BR').css({ opacity: '0' });
    }
}