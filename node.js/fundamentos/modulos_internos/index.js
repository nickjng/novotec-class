const operao = require("./operacoes")

let numero1 = 80;

let numero2 = 23; 

let resultado;

// executandos operações matematicas

resultado = operao.somar(numero1, numero2)

console.log(`Soma: ${numero1} + ${numero2} = ${resultado}`);


resultado = operao.subtrair(numero1, numero2)

console.log(`Subtração: ${numero1} - ${numero2} = ${resultado}`);


resultado = operao.multiplicar(numero1, numero2)

console.log(`Multiplicação: ${numero1} X ${numero2} = ${resultado}`);


resultado = operao.dividir(numero1, numero2)

console.log(`Divisão: ${numero1} / ${numero2} = ${resultado}`);



// digitar dentro do TERMINAL: node index.js

