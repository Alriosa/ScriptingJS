console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I inserted this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;



var date = new Date();

var hour = date.getHours();
var minute = addZero(date.getMinutes());
var hourUTC = date.getHours() + 6;
var hourEST = date.getHours() + 2;
var hourPST = date.getHours() - 1;
var hourCST = date.getHours() + 1;


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function validate24h(h) {}

function getTime() {

    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourEST + ":" + minute;
    document.getElementById("timeBoxPst").value = hourPST + ":" + minute;
    document.getElementById("timeBoxCst").value = hourCST + ":" + minute;
    console.log("Funciona");

}

function windowPopUp() {
    window.alert("This is a Window alert");
}