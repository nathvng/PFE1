/*ex1 - Hello World*/
function sayHello() {
    console.log("Hello World")
}
sayHello();

//ex 2 Soma Simples
function sum() {
    let a = 5;
    let b = 7;

    let sum = a + b;
    console.log(sum);
}

/*ex.3 -  Variável Local */
function localExample() {
    let message = "Variável local";
    console.log(message);
}
console.log(message);

//ex 4 Saudação Por Nome
function greet(name) {
    console.log('Hello, ${ name }!');
}
//testando
greet("Júlia");
greet("Isabele");
greet("Nathália");

/* ex.5 - Área do Círculo */
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateArea(2));

//ex 6 Data Atual
function currentDate() {
    let today = new Date();
    console.log(today);
}

/* ex.7 - Shadowing Básico */
let x = 10;
function shadowExample(x) {
    console.log(x);
    console.log(x);
}
console.log(shadowExample(20));

//ex 8 
function isPrime(n) {
    n = 4;
    if (n % 2 == 0) {
        return false
    } else {
        return true
    }
}
console.log(n);

/* ex.9 - Conversão de Temperatura */
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let c = 25;
let f = 77;

console.log(c + "°C em Fahrenheit: " + toFahrenheit(c) + "°F");
console.log(f + "°F em Celsius: " + toCelsius(f) + "°C");

/* ex.10 - Máximo em Array */
function getMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/* ex.11 - Média de Notas */
function average(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let media = sum / scores.length;
    return media;
}
const notas = [8, 7.5, 9, 10];
console.log("Média:", average(notas));

/* ex.12 - Construção de Nome Completo */
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Ana", "Silva"));
console.log(fullName("Carlos", "Souza"));
console.log(fullName("Maria", "Oliveira"));
console.log(fullName("João", "Pereira"));
console.log(fullName("Luiza", "Costa"));


/* ex.13 - Chamadas Encadeadas*/
function double(n) {
    return n * 2;
}
function quadruple(n) {
    return double(double(n));
}
console.log(quadruple(3));

/* ex.14 - Shadowing Médio */
let mode = "light";
function toggleMode(mode) {
    let newMode;
    if (mode === "light") {
        newMode = "dark";
    } else {
        newMode = "light";
    }
    console.log("Dentro da função (local):", newMode);
    return newMode;
}
let resultado = toggleMode(mode);
console.log("Fora da função (global):", mode);
console.log("Valor retornado pela função:", resultado);

