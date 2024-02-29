function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function encriptarTexto() {
    let textoOriginal = document.getElementById('textoEntrada').value;
    let textoEncriptado = encriptar(textoOriginal);
    document.getElementById('textoSalida').value = textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('textoEntrada').value;
    let textoDesencriptado = desencriptar(textoEncriptado);
    document.getElementById('textoSalida').value = textoDesencriptado;
}

function copiarTexto() {
    var copiado = document.getElementById('textoSalida');
    copiado.select();
    document.execCommand('copy');

    var mensajeCopia = document.getElementById('mensajeCopiado');
    mensajeCopia.textContent = 'Texto copiado al portapapeles';
    mensajeCopia.classList.add('mostrar');

    setTimeout(function () {
        mensajeCopia.classList.remove('mostrar');
    }, 3000);
}

function limpiarCampos() {
    document.getElementById('textoEntrada').value = '';
    document.getElementById('textoSalida').value = '';
    document.querySelector('.mensajeCopiado').innerText = '';
}
