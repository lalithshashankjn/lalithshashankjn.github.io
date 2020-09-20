let welcomeSphere;
let body;


function initializeSphere() {    
    body = document.getElementsByTagName("body");   
    welcomeSphere = document.getElementById("welcomesphere");        
    $(".mainContent").fadeOut(10);    
    resizeSphere();
    playAnimation();
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
    setSizes();
}

function pauseAnimation() {    
    welcomeSphere.style.animationPlayState = "paused";
    console.log("pausing Animation");
}

function playAnimation() {    
    toBGPosition = getBGpxPosition($("#welcomesphere").width()) + ' 0';
    $.keyframe.define([{
        name: 'scaled-rotate',
        from: { 'background-position': '0 0' },
        to: { 'background-position': toBGPosition }
    }]);
    $('#welcomesphere').playKeyframe(
        ' scaled-rotate 5s linear infinite');
}

function hideThis() {
    Promise.resolve($(".sphereContainer").fadeOut(500)).then(
        $(".mainContent").fadeIn(2000));
    $("#box").fadeIn(1000);  
    setSizes();
}

function shrinkThis(animationDirection) {
    $.keyframe.define([{
        name: 'scaleanime',
        from: { 'transform': 'scale(0.9)' },
        to: { 'transform': 'scale(0.4)'}
    }]);
    $('#welcomesphere').playKeyframe({
        name: 'scaleanime', // name of the keyframe you want to bind to the selected element
        duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
        timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
        delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
        iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
        direction: animationDirection, //[optional, default: 'normal']  which direction you want the frames to flow
        fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
        complete: function () { playAnimation() }//[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
    });
    
}

function hideAndFadeOut() {    
    Promise.resolve(shrinkThis('normal')).then(hideThis())
    
}

function showThis() {
    Promise.resolve(shrinkThis('reverse')).then($(".sphereContainer").fadeIn());
    $("#box").fadeOut(10);    
    $("#contentContainer").fadeOut(10);    
    
}

function getBGpxPosition(x){    
    let y = (x *1690)/ 844;    
    return y.toString();
}