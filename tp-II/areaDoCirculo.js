const teclado = require("prompt-sync")();
let n1 = teclado("Informe um valor: ");
let valorTruncado = Math.trunc(Math.PI)
let area = valorTruncado*n1**2
console.log(`A área do círculo com raio ${n1} é ${area}`);