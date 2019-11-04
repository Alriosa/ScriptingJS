console.log('Logic is connected');
document.getElementById("textBoxSecOne").value = "I inserted this via JS";
document.getElementById("textSecOne").innerHTML = 5 + 6;


//------------------------------//Inicio de logica de tiempo.//------------------------------//

var date = new Date();
var hour = date.getHours();
var minute = addZero(date.getMinutes());
var hourUTC = date.getHours() + 6;
var hourEST = date.getHours() + 2;
var hourPST = date.getHours() - 1;
var hourCST = date.getHours() + 1;


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

    document.getElementById("timeBoxMdt").value = hour + ":" + minute;
    document.getElementById("timeBoxUtc").value = hourUTC + ":" + minute;
    document.getElementById("timeBoxEst").value = hourEST + ":" + minute;
    document.getElementById("timeBoxPst").value = hourPST + ":" + minute;
    document.getElementById("timeBoxCst").value = hourCST + ":" + minute;

}

function timeTransform() {
    document.getElementById("yourTimebox").value = hour + ":" + minute;
}

function customerTimeToMineUTC() {}

function customerTimeToMineEST() {}

function customerTimeToMinePST() {}

function customerTimeToMineCST() {}
//------------------------------//Fin de logica de tiempo.//------------------------------//




function testFunction() {
    console.log("La funcion si ha entrado");
}




function windowPopUp() {
    window.alert("This is a Window alert");
}