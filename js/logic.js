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
    var second = data.getSeconds();

    document.getElementById("textBoxDateOne").value = hour + ":" + minute + ":" + second;
    console.log("Funciona");
}