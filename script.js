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
    let sphereWidth = $("#welcomesphere").width();
    let sphereHeight = $("#welcomesphere").height();
    if ((containerWidth < containerHeight)) {
        $("#welcomesphere").height(containerWidth);
        $("#welcomesphere").width( containerWidth);
    }
    else if ((containerWidth > containerHeight)) {        
        $("#welcomesphere").width(containerHeight);
        $("#welcomesphere").height(containerHeight);
    }
    else {
        $("#welcomesphere").width(containerWidth);
        $("#welcomesphere").height(containerHeight);
    }
    console.log("containerWidth: ", containerWidth);
    console.log("containerHeight: ", containerHeight);
    console.log("sphereWidth: ", $("#welcomesphere").width());
    console.log("sphereHeight: ", $("#welcomesphere").height());
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

