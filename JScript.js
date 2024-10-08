let noClicks = 0;
const interval = 10000;
const buttonText = ["STOP", "READY", "GO"];
const buttonClass = ["btn btn-danger", "btn btn-warning", "btn btn-success"];

function changeColor() {
    noClicks = (noClicks + 1) % buttonText.length;
    document.getElementById("buttonColor").innerHTML = buttonText[noClicks];
    document.getElementById("buttonColor").className = buttonClass[noClicks];
}

setInterval(changeColor, interval);
