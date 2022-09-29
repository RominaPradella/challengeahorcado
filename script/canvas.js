var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");

function limpiar() {
    pincel.clearRect(0, 0, 294, 360);
}

function dibujarBase() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(0, 356);
    pincel.lineTo(294, 356);
    pincel.lineTo(294, 360);
    pincel.lineTo(0, 360);
    pincel.fill();
}

function dibujarMastil() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(80, 360);
    pincel.lineTo(84, 360);
    pincel.lineTo(84, 0);
    pincel.fill();
}

function dibujarAgarre() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(260, 0);
    pincel.lineTo(260, 4);
    pincel.lineTo(80, 4);
    pincel.fill();
}

function dibujarSoga() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(260, 0);
    pincel.lineTo(260, 50);
    pincel.lineTo(256, 50);
    pincel.lineTo(256, 0);
    pincel.fill();
}

function dibujarCabeza() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(258, 83, 33, 0, 2*3.14);
    pincel.fill();

    pincel.fillStyle = "#E5E5E5";
    pincel.beginPath();
    pincel.arc(258, 83, 29, 0, 2*3.14);
    pincel.fill();
}

function dibujarTronco() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(260, 250);
    pincel.lineTo(256, 250);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dibujarPieIzquierdo() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(256, 250);
    pincel.lineTo(226, 310);
    pincel.lineTo(230, 310);
    pincel.lineTo(260, 250);
    pincel.fill();
}

function dibujarPieDerecho() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(260, 250);
    pincel.lineTo(294, 310);
    pincel.lineTo(290, 310);
    pincel.lineTo(256, 250);
    pincel.fill();
}

function dibujarManoIzquierda() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(256, 115);
    pincel.lineTo(222, 175);
    pincel.lineTo(226, 175);
    pincel.lineTo(260, 115);
    pincel.fill();
}

function dibujarManoDerecha() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(294, 175);
    pincel.lineTo(290, 175);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dibujarAhorcado() {
    pincel.fillStyle = "red"; 
    pincel.fillRect(215,115,105,5); 
}
