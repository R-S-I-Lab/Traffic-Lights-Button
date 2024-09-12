let noClicks = 0;

function changeColor() {
    ++noClicks;
    if (noClicks === 1) {
        document.getElementById("buttonColor").innerHTML = "READY";
        document.getElementById("buttonColor").className = "btn btn-warning";
    } else if (noClicks === 2) {
        document.getElementById("buttonColor").innerHTML = "GO";
        document.getElementById("buttonColor").className = "btn btn-success";
    } else {
        document.getElementById("buttonColor").innerHTML = "STOP";
        document.getElementById("buttonColor").className = "btn btn-danger";
        noClicks = 0;
    }
}
setInterval(changeColor, 10000);
