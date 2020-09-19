let welcomeSphere;
let body;
let debug = true;

function initializeSphere() {    
    body = document.getElementsByTagName("body");   
    welcomeSphere = document.getElementById("welcomesphere");
    //welcomeSphere.style.animationPlayState = "paused";
    welcomeSphere.style.animationPlayState = "running";
}

function pauseAnimation() {    
    welcomeSphere.style.animationPlayState = "paused";
}

function resumeAnimation() {    
    welcomeSphere.style.animationPlayState = "running";
}

function hideThis() {
    $(".sphereContainer").fadeOut("fast");
}

function showThis() {
    $(".sphereContainer").fadeIn("fast");
}

