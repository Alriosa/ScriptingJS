console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I insert this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;

var date = new Date();
var hour = date.getHours();
var minute = addZero(date.getMinutes());

var hourUTC = date.getUTCHours();
//var minuteUTC = data.getUTCMinutes();

var hourEST = date.getUTCHours();
var minuteEST;

var hourPST = date.getUTCHours();;
var minutePST;

var hourCST = date.getUTCHours();;
var minuteCST;

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setEST() {

}

function setPST() {

}

function setCST() {

}

function getTime() {

    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxPst").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxCst").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    console.log("Funciona");
}

function windowPopUp() {
    window.alert("This is a Window alert");
}