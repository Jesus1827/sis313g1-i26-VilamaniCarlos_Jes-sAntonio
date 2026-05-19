// 4) FizzBuzz

let numeroFizzBuzz = parseInt(prompt("Ingrese un número para FizzBuzz:"));

for (let i = 1; i <= numeroFizzBuzz; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// 5) Serie Fibonacci

let n = parseInt(prompt("Ingrese la cantidad de números Fibonacci:"));

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);

    let temp = a + b;
    a = b;
    b = temp;
}


// 6) Número primo

function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numeroPrimo = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if (esPrimo(numeroPrimo)) {
    console.log(numeroPrimo + " es primo");
}
else {
    console.log(numeroPrimo + " no es primo");
}


// 7) Tabla de multiplicar

let numeroTabla = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

console.log("Tabla de multiplicar del " + numeroTabla);

for (let i = 1; i <= 10; i++) {
    console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}

// 8) Contar vocales

function contarVocales(texto) {

    let contador = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {

        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

let textoUsuario = prompt("Ingrese una cadena de texto:");

console.log("Cantidad de vocales: " + contarVocales(textoUsuario));


// 9) Número mayor en un arreglo

let numeros = [5, 12, 8, 20, 3, 15];

function encontrarMayor(arreglo) {

    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {

        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}

console.log("El número mayor es: " + encontrarMayor(numeros));


// 10) Calculadora básica

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let resultado;

if (operacion === "+") {
    resultado = sumar(num1, num2);
}
else if (operacion === "-") {
    resultado = restar(num1, num2);
}
else if (operacion === "*") {
    resultado = multiplicar(num1, num2);
}
else if (operacion === "/") {
    resultado = dividir(num1, num2);
}
else {
    resultado = "Operación no válida";
}

console.log("Resultado: " + resultado);