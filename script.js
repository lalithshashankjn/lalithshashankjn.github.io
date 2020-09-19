let welcomeSphere;
let body;
let debug = true;


function initializeSphere() {    
    body = document.getElementsByTagName("body");   
    welcomeSphere = document.getElementById("welcomesphere");    
    welcomeSphere.style.animationPlayState = "running";
    $(".mainContent").fadeOut("fast");    
    resizeSphere();
}

function resizeSphere() {
    let containerWidth = $(".sphereContainer").width();
    let containerHeight = $(".sphereContainer").height();   
    let setVal = 0;
    if ((containerWidth < containerHeight)) {
        $("#welcomesphere").height(containerWidth);
        $("#welcomesphere").width(containerWidth);        
    }
    else if ((containerWidth > containerHeight)) {        
        $("#welcomesphere").width(containerHeight);
        $("#welcomesphere").height(containerHeight);        
    }
    else {
        $("#welcomesphere").width(containerWidth);
        $("#welcomesphere").height(containerHeight);
    }    

    toBGPosition = getBGpxPosition($("#welcomesphere").width())+ ' 0';
    $.keyframe.define([{
        name: 'scaled-rotate',
        from: {'background-position': '0 0'},
        to: { 'background-position': toBGPosition }
    }]);
    $('#welcomesphere').playKeyframe(
        ' scaled-rotate 5s linear infinite');
}

function pauseAnimation() {    
    welcomeSphere.style.animationPlayState = "paused";
}

function resumeAnimation() {    
    welcomeSphere.style.animationPlayState = "running";
}

function hideThis() {
    $(".sphereContainer").fadeOut("fast");
    $(".mainContent").fadeIn("slow");
}

function showThis() {
    $(".sphereContainer").fadeIn();
}

function getBGpxPosition(x){
    //let y = 48970850 + (-43.40962 - 48970850) / (1 + (x / 30829810) ^ 0.9658882);
    let y = (x *1690)/ 844;
    console.log("width: ", x, " position: ", y);
    return y.toString();
}