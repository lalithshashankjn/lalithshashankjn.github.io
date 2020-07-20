//This has been shamelessly taken from the following website
//<Website URL goes here>

var item = document.querySelector("#moveItem");
var itemRect = item.getBoundingClientRect();

document.addEventListener("mousemove", followMouse, false);

function followMouse(e) {
    var xPos = e.pageX - itemRect.width / 2;
    var yPos = e.pageY - itemRect.height / 2;

    //console.log(xPos + " " + yPos);

    item.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

}