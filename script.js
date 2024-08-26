// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Referencias a los elementos del DOM
const inputTexto = document.getElementById("inputTexto");
const outputTexto = document.getElementById("outputTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");

// Evento para encriptar el texto
btnEncriptar.addEventListener("click", function() {
    const texto = inputTexto.value;
    const textoEncriptado = encriptarTexto(texto);
    outputTexto.value = textoEncriptado;
});

// Evento para desencriptar el texto
btnDesencriptar.addEventListener("click", function() {
    const texto = inputTexto.value;
    const textoDesencriptado = desencriptarTexto(texto);
    outputTexto.value = textoDesencriptado;
});

// Evento para copiar el texto
btnCopiar.addEventListener("click", function() {
    outputTexto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});
