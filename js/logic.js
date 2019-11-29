console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I inserted this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;


//------------------------------//Inicio de logica de tiempo.//------------------------------//
$(document).ready(function() {
    cleaning();
});
var date = new Date();
var hour = date.getHours();
var minute = addZero(date.getMinutes());
var hourUTC = date.getHours() + 6;
var hourEST = date.getHours() + 2;
var hourPST = date.getHours() - 1;
var hourCST = date.getHours() + 1;

function cleaning() {
    document.getElementById("timeOfClient").value = " ";
    document.getElementById("timeOfClientMDT").value = " ";
    document.getElementById("timeOfClient").classList.remove('alert');
    console.log("Cleaning function is ready");
}

//function validate24h(h){}(Aun no se si hacer esta funcion para validar)

//Funcion que agrega un cero cuando el minuto es menor a 0. 

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//esta funcion sirve para obtener el valor de las horas.

function autoTimeRefresh(t) {
    console.log("Hice refresh brother!");
    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourEST + ":" + minute;
    document.getElementById("timeBoxPst").value = hourPST + ":" + minute;
    document.getElementById("timeBoxCst").value = hourCST + ":" + minute;
    setTimeout("location.reload(true);", t);
}

function getTime() {
    document.getElementById("timeBoxMdt").value = null;
    document.getElementById("timeBoxUtc").value = null;
    document.getElementById("timeBoxEst").value = null;
    document.getElementById("timeBoxPst").value = null;
    document.getElementById("timeBoxCst").value = null;
    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourEST + ":" + minute;
    document.getElementById("timeBoxPst").value = hourPST + ":" + minute;
    document.getElementById("timeBoxCst").value = hourCST + ":" + minute;

}

var thisBoxDateClient = document.getElementById("timeOfClient").value;

function validateEmptyValue() {
    if (thisBoxDateClient.value.lenght == 0) {
        console.log("Value not found");
        document.getElementById("timeOfClient").classList.add('alert');
        document.getElementById("timeOfClient").value = "Insert a value";
    } else {
        console.log("Validacion effective");
    }
}

function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function customerTimeToMineUTC() {
    validateEmptyValue();
    var timeClient;
    var newClientTime;
    timeClient = document.getElementById("timeOfClient").value;
    newClientTime = timeClient - 6;
    document.getElementById("timeOfClientMDT").value = newClientTime + " " + "MDT";
    console.log(timeClient);
    selectElement('selectElementTime', '---');
}

function customerTimeToMineEST() {
    var timeClient;
    var newClientTime;

    timeClient = document.getElementById("timeOfClient").value;
    newClientTime = timeClient - 2;
    document.getElementById("timeOfClientMDT").value = newClientTime + " " + "MDT";
    console.log(timeClient);
}

function customerTimeToMinePST() {
    var timeClient;
    var newClientTime;

    timeClient = document.getElementById("timeOfClient").value;
    newClientTime = timeClient - 6;
    document.getElementById("timeOfClientMDT").value = newClientTime + " " + "MDT";
    console.log(timeClient);
}

function customerTimeToMineCST() {
    var timeClient;
    var newClientTime;

    timeClient = document.getElementById("timeOfClient").value;
    newClientTime = timeClient - 6;
    document.getElementById("timeOfClientMDT").value = newClientTime + " " + "MDT";
    console.log(timeClient);
}
//------------------------------//Fin de logica de tiempo.//------------------------------//




function testFunction() {
    console.log("La funcion si ha entrado");
}




function windowPopUp() {
    window.alert("This is a Window alert");
}


//-----Comienzo de Javascript queries (JQuery) Sandbox---------


//***********Fin de Javascript Queries Sandbox*/