function encriptar(){
    let oracion = document.getElementById("cajaTexto").value;
    let oracionArray = oracion.split("");
    let rectangulo = document.getElementById("rectangulo");

    for( let i=0; i < oracionArray.length; i++ ){
        if( oracionArray[i] == "a"){
            oracionArray[i] = "ai"
        } else if (oracionArray[i] == "e" ) {
             oracionArray[i] = "enter"
        } else if (oracionArray[i] == "i") {
            oracionArray[i] = "imes"
        } else if (oracionArray[i] == "o") {
            oracionArray[i] = "ober"
        } else if (oracionArray[i] == "u")  {
            oracionArray[i] = "ufat"
        }
    }
    let oracionLista = oracionArray.join("");
     rectangulo.innerHTML= oracionLista;
document.getElementById("cajaMensajes").style.display = "none";
document.getElementById("munieco").style.display = "none";
let espacio = document.getElementById("espacio");
let botonCopiar = document.createElement("button");
let divCopiar = document.createElement("div");
let nombreBoton = document.createTextNode("Copiar");

botonCopiar.className = "botonCopiar";
divCopiar.className = "divCopiar";
botonCopiar.onclick = copiar;

divCopiar.appendChild(nombreBoton);
botonCopiar.appendChild(divCopiar);
espacio.appendChild(botonCopiar);

}

function copiar(){
    let rectangulo = document.getElementById("rectangulo");
    navigator.clipboard.writeText(rectangulo.innerHTML);
}

function desencriptar(){
    let oracionEncriptada =  document.getElementById("cajaTexto").value
    let rectangulo = document.getElementById("rectangulo");
    let posicion
    let oracionArray = oracionEncriptada.split("");
    
    while(oracionEncriptada.indexOf("ai") != -1 ){
        posicion = oracionEncriptada.indexOf("ai")
        oracionArray.splice(posicion + 1, 1)
        oracionEncriptada = oracionArray.join("")
    }

    while(oracionEncriptada.indexOf("enter") != -1 ){
        posicion = oracionEncriptada.indexOf("enter")
        oracionArray.splice(posicion + 1, 4)
        oracionEncriptada = oracionArray.join("")
    }

    while(oracionEncriptada.indexOf("imes") != -1 ){
        posicion = oracionEncriptada.indexOf("imes")
        oracionArray.splice(posicion + 1, 3)
        oracionEncriptada = oracionArray.join("")
    }

    while(oracionEncriptada.indexOf("ober") != -1 ){
        posicion = oracionEncriptada.indexOf("ober")
        oracionArray.splice(posicion + 1, 3)
        oracionEncriptada = oracionArray.join("")
    }
    while(oracionEncriptada.indexOf("ufat") != -1 ){
        posicion = oracionEncriptada.indexOf("ufat")
        oracionArray.splice(posicion + 1, 3)
        oracionEncriptada = oracionArray.join("")
    }
rectangulo.innerHTML = oracionEncriptada;
document.getElementById("cajaMensajes").style.display = "none";
document.getElementById("munieco").style.display = "none";

let espacio = document.getElementById("espacio");
let botonCopiar = document.createElement("button");
let divCopiar = document.createElement("div");
let nombreBoton = document.createTextNode("Copiar");

botonCopiar.className = "botonCopiar";
divCopiar.className = "divCopiar";
botonCopiar.onclick = copiar;

divCopiar.appendChild(nombreBoton);
botonCopiar.appendChild(divCopiar);
espacio.appendChild(botonCopiar);
}


