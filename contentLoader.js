function clickedBox() {
    $("#contentContainer").css({ display: "flex" });
    fadeout("#contentContainer",'reverse');
    //$('body').animate({
    //    scrollTop: $("#contentContainer").offset().top
    //}, 1000);
}

function scrollUp() {
    $('body').animate({
        scrollTop: $(".mainContent").offset().top
    }, 1000);
    $("#contentContainer").fadeOut(2000);
}

function scrolltoID(toDestination,fadeOutID) {
    $('body').animate({
        scrollTop: $(toDestination).offset().top
    }, 1000);
    $(fadeOutID).fadeOut(2000);
}

function fadeout(id, dir='normal') {    
    $.keyframe.define([{
        name: 'fadeOut',
        from: { 'opacity': '1' },
        to: { 'opacity': '0'}
    }]);
    $(id).playKeyframe({
        name: 'fadeOut', // name of the keyframe you want to bind to the selected element
        duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
        timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
        delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
        iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
        direction: dir, //[optional, default: 'normal']  which direction you want the frames to flow
        fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
        complete: function () {   
            if (dir == 'normal') {
                scrolltoID(".mainContent", "#contentContainer");
            }
            else if (dir == 'reverse') {
                scrolltoID("#contentContainer", null);
            }
        }//[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
    });
    
}

