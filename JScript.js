let noClicks = 0;
let buttonText = ["STOP", "READY", "GO"];
let buttonClass = ["btn btn-danger", "btn btn-warning", "btn btn-success"];

function changeColor() {
    noClicks = (noClicks + 1) % buttonText.length;
    document.getElementById("buttonColor").innerHTML = buttonText[noClicks];
    document.getElementById("buttonColor").className = buttonClass[noClicks];
}
setInterval(changeColor, 10000);
