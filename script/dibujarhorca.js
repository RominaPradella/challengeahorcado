/* INDEX */ 

var botonIniciar = document.querySelector(".btninicio");
botonIniciar.addEventListener("click", iniciarJuego);

var botonDesistir = document.querySelector(".btnabandonar");
botonDesistir.addEventListener("click", function() {
    document.querySelector(".btns").style.display = "flex";
    document.querySelector(".nuevapalabra").style.display = "none"; 
    document.querySelector(".disenio").style.display = "none";
})

var botonNuevoJuego = document.querySelector(".btnnuevapalabra");
botonNuevoJuego.addEventListener("click", iniciarJuego);

/* INICIAR JUEGO */

function iniciarJuego(){
    document.querySelector(".btns").style.display = "none";
    document.querySelector(".nuevapalabra").style.display = "none"; 
    document.querySelector(".disenio").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".iniciar").style.display = "";
    document.querySelector(".msj").style.display = "none";

    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";
    letrasErrores = [];

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}

/* ESCOGER PALABRA */

var palabra;

let palabras = [
    "PROGRAMA",
    "DISEÑO",
    "MOUSE",
    "FUNCION",
    "CODIGO",
    "BOTON",
    "PAGINA",
    "VARIABLE",
    "HTML",
    "CSS",
    "ALURA",
    "ONE",
    "ORACLE"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".guion-" + i).style.display = "none";

        var letras = document.querySelector(".letrascorrectas");
        while(letras.firstChild) {
            letras.removeChild(letras.firstChild);
        }

        var letrasNo = document.querySelector(".letrasincorrectas");
        while(letrasNo.firstChild) {
            letrasNo.removeChild(letrasNo.firstChild);
        }
    }

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".guion-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letrascorrectas").appendChild(letras);
    }
}

var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;
var letrasErrores;

/* CORROBORO LAS LETRAS*/ 

function verLetra(letra) {
    var esta = false;

    if(lUsadas.indexOf(letra) == -1) {
        lUsadas.push(letra);
    
        for(var i = 0; i < palabra.length; i++) {
            if(letra == palabra[i]) {
                dibujarLetraCorrecta(letra, i + 1);
                ganaste++;
                esta = true;
            }
    
            if(ganaste == palabra.length) {
                finJuego = true;
                mensaje = "GANASTE, FELICIDADES!";
                colorMensaje = "green";
                verificarFin();
            }
        }
        if(!esta) {
            if(letrasErrores.indexOf(letra) == -1) {
                errores++;
                letrasErrores.push(letra);
                dibujarLetraIncorrecta(letra);
                if(dibujarHorca(errores) == false) {
                    finJuego = true;
                    mensaje = "FIN DEL JUEGO!";
                    colorMensaje = "red";
                    verificarFin();
                }
            }
        }
        return esta;
    }
}

/* DIBUJO LETRA CORRECTA*/ 

function dibujarLetraCorrecta(letra, position) {
    var letras = document.querySelector(".letra-" + position);
    letras.textContent = letra;
}

/* MENSAJE */ 

function verificarFin() {
    if(finJuego) {
        document.querySelector("canvas").style.display = "none";
        document.querySelector(".iniciar").style.display = "none";
        document.querySelector(".msj").style.display = "";
        document.querySelector(".msj").textContent = mensaje;
        document.querySelector(".msj").style.color = colorMensaje;
    }
}

/*function vGanaste() {
    
}*/

/* VERIFICO PALABRA*/ 

function verificarPalabra(palabra) {
    if(palabra.length > 8 || palabra.length < 2) {
        return false;
    }
    for(var i = 0; i < palabra.length; i++) {
        switch(palabra[i]) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "Ñ":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                continue;
                break;
            default:
                return false;
                break;
        }
    }
    return true;
}

/* LETRA CORRECTA */ 

document.addEventListener("keypress", verificarTecla);

var errores = 0;
var lUsadas = [];

function verificarTecla(event) {
    var letra = event.key.toUpperCase();;
    
    if(verificarLetraCorrecta(letra)) {
        var indice = verLetra(letra);
    }

}

function verificarLetraCorrecta(letra) {
    var l = letra.toUpperCase();
    switch(l) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "Ñ":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            return true;
            break;
        default:
            return false;
            break;
    }
}

/* LETRA INCORRECTA */

function dibujarLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letraincorrecta");
    letraNo.textContent = letra;
    document.querySelector(".letrasincorrectas").appendChild(letraNo);
}

/* DIBUJAR HORCA */ 

function dibujarHorca(errores) {
    switch(errores) {
        case 1:
            dibujarBase();
            break;
        case 2:
            dibujarMastil();
            break;
        case 3:
            dibujarAgarre();
            break;
        case 4:
            dibujarSoga();
            break;
        case 5:
            dibujarCabeza();
            break;
        case 6:
            dibujarTronco();
            break;
        case 7:
            dibujarPieIzquierdo();
            break;
        case 8:
            dibujarPieDerecho();
            break;
        case 9:
            dibujarManoIzquierda();
            break;
        case 10:
            dibujarManoDerecha();
            break;
        case 11:
            dibujarAhorcado();
            break;
        case 12:
            return false;
        default:
            break;
    }
}





