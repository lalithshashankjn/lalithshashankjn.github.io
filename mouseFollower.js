//This has been shamelessly taken from the following website
//<Website URL goes here>

//var item = document.querySelector("#moveItem");
var body = document.querySelector("body");
//var itemRect = item.getBoundingClientRect();
var escaped = false;
var x = 50;
var y = 50;
const RADIUS = 20;

document.body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;

window.onload = function () {
    console.log("window Loaded");    
}

window.onclick = function () {
    loaded = true;
    console.log("adding enter n leave events");
    this.reqPtrLock();
}

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function degToRad(degrees) {
    var result = Math.PI / 180 * degrees;
    return result;
}

function reqPtrLock() {
    console.log("requesting ptr lock");
    if (!body.onfocus){
        body.focus();        
        document.body.requestPointerLock();
    }
}

function relPtrLock() {
    console.log("releasing ptr lock");    
    if (!body.onfocus && escaped == true) {
        body.focus();
        document.exitPointerLock();
    }
}
function lockChangeAlert() {
    if (document.pointerLockElement === body || document.mozPointerLockElement === body) {
        console.log("adding follow mouse");
        document.addEventListener("mouseMove", followMouse, false);
    }
    else {
        document.removeEventListener("mouseMove", followMouse, false);
        escape = true;
    }
}

var tracker = document.getElementById('tracker');
var animation;

function canvasDraw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
    ctx.fill();
}

function followMouse(e) {    
    x += e.movementX;
    y += e.movementY;
    if (x > document.body.width + RADIUS) {
        x = -RADIUS;
    }
    if (y > document.body.height + RADIUS) {
        y = -RADIUS;
    }
    if (x < -RADIUS) {
        x = document.body.width + RADIUS;
    }
    if (y < -RADIUS) {
        y = document.body.height + RADIUS;
    }
    tracker.textContent = "X position: " + x + ", Y position: " + y;
    //console.log("X position: " + x + ", Y position: " + y);
    if (!animation) {
        animation = requestAnimationFrame(function () {
            animation = null;
            canvasDraw();
        });
        
    }
}

