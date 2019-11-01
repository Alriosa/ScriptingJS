console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I insert this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;

var date = new Date();

var hour = date.getHours();
var minute = addZero(date.getMinutes());
var hourUTC = date.getUTCHours();
var hourEST = date.setHours(date.setUTCHours() - 2);
console.log(hourEST);
var hourPST = date.getUTCHours();;
var hourCST = date.getUTCHours();;


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
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