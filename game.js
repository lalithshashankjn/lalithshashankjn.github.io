
var canvas = document.getElementbyID("canvas");
var context = canvas.getContext("2d");

circle = new Image();
circle.src = "cursor.png";
circle.addEventListener("load", init, false);

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
}

function init() {
    requestAnimFrame(update)
}

function update() {
    context.fillRect(10, 10, 40, 380);
    requestAnimFrame(update);
}
