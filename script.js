let welcomeSphere;
let body;
let debug = true;

function initializeSphere() {    
    body = document.getElementsByTagName("body");   
    welcomeSphere = document.getElementById("welcomesphere");    
    welcomeSphere.style.animationPlayState = "running";
    $(".mainContent").fadeOut("fast");
}

function resizeSphere() {
    let width = $("#welcomesphere").width();
    let height = $("#welcomesphere").height();
    if (width < height) {        
        $("#welcomesphere").width(height);
    }
    else {
        $("#welcomesphere").height(width);        
    }
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

