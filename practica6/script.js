let pantalla = document.getElementById("pantalla");

function agregarNumero(valor) {
    pantalla.value += valor;
}
function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}
function limpiar() {
    pantalla.value = "";
}

function calcular() {
    try {
        let resultado = pantalla.value;

        if (resultado.includes("%")) {
            let partes = resultado.split("%");
            let porcentaje = parseFloat(partes[0]);
            let numero = parseFloat(partes[1]);

            pantalla.value = (porcentaje * numero) / 100;
        } else {
            pantalla.value = eval(resultado);
        }
    } catch {
        pantalla.value = "Error";
    }
}