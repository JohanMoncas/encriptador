var botonencriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var imagen = document.querySelector(".contenedor-imagen");
var h2 = document.querySelector(".contenedor-h2");
var parrafo = document.querySelector(".contenedor-p")
var resultado = document.querySelector(".texto-resultado")

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar(){
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    var texto = document.querySelector(".texto");
    return texto.value;
}

function copiar(){
    var contenido = document.querySelector(".texto-resultado");
    contenido.select();
    document.execCommand("copy");
}


function encriptarTexto(mensaje){
    var textodos = mensaje;
    var textoFinal ="";

    for(var i = 0; i < textodos.length; i++){
        if(textodos[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(textodos[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(textodos[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(textodos[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(textodos[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + textodos[i];
        }
    }

    document.querySelector(".contenedor-imagen").style.display = "none";
    document.querySelector(".contenedor-h2").style.display = "none";
    document.querySelector(".contenedor-p").style.display = "none";
    document.querySelector(".resultado").style.display = "block";

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var textodos = mensaje;
    var textoFinal ="";

    for(var i = 0; i < textodos.length; i++){
        if(textodos[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(textodos[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(textodos[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(textodos[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(textodos[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + textodos[i];
        }
    }

    return textoFinal;
}


