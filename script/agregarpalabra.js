window.onload = function(){
    window.palabras = [];
}

/* AGREGAR PALABRA */ 

function agregarPalabra(){

    document.querySelector(".btns").style.display = "none";
    document.querySelector(".nuevapalabra").style.display = "flex"; 
    document.querySelector(".disenio").style.display = "none"; 

    document.getElementById("texto").focus();
    let dato = document.getElementById("texto").value;
    let may = dato.toLocaleUpperCase();


    palabras.push(may);
    
    document.getElementById("texto").value = "";

}   

/* VOLVER INICIO */ 

function volverInicio(){
    document.querySelector(".btns").style.display = "flex";
    document.querySelector(".nuevapalabra").style.display = "none"; 
    document.querySelector(".disenio").style.display = "none";
}

/* MOSTRAR ARREGLO */

/*function mostrarArreglo(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for(const dato of palabras){
        let datoParrafo = document.createElement("p");
        datoParrafo.innerText = dato;

        resultado.appendChild(datoParrafo);
    }
}*/

var btnAgregar = document.querySelector(".btnagregar");
btnAgregar.addEventListener("click", agregarPalabra);