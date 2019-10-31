console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I insert this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;

var date = new Date();
var hour = date.getHours();
var minute = addZero(date.getMinutes());

var hourUTC = date.getUTCHours();
//var minuteUTC = data.getUTCMinutes();

var hourEST = date.getUTCHours();
var minuteEST = addZero(date.getMinutes());;

var hourPST = date.getUTCHours();;
var minutePST = addZero(date.getMinutes());;

var hourCST = date.getUTCHours();;
var minuteCST = addZero(date.getMinutes());;

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setEST(hourEST) {
    hourEST = hourEST - 2;
    if (hourEST <= 1) {
        hourEST = hourEST + 24;
    }

}

function setPST() {

}

function setCST() {

}

function getTime() {

    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourEST + ":" + minute;
    document.getElementById("timeBoxPst").value = hourPST + ":" + minute;
    document.getElementById("timeBoxCst").value = hourCST + ":" + minute;
    //document.getElementById("timeBoxMdt").value = hour + ":" + minute; Deprecated
    console.log("Funciona");

}

function windowPopUp() {
    window.alert("This is a Window alert");
}