console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I insert this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;

var date = new Date();

function windowPopUp() {
    window.alert("This is a Window alert");
}

function getTime() {

    var hour = date.getHours();
    var minute = date.getMinutes();

    var hourUTC = date.getUTCHours();
    //var minuteUTC = data.getUTCMinutes();

    var hourEST;
    var minuteEST;

    var hourPST;
    var minutePST;

    var hourCST;
    var minuteCST;

    var hourMST;
    var minuteMST;


    document.getElementById("textBoxDateOne").value = hour + ":" + minute;
    document.getElementById("textBoxDateTwo").value = hourUTC + ":" + minute;
    console.log("Funciona");
}