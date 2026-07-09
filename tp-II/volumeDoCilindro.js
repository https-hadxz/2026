const teclado = require("prompt-sync")();
let raio, altura, volume
raio = teclado("Informe um valor para o raio da base do cilindro: ");
altura = teclado("Informe um valor para a altura do cilindro: ");
valorTruncadoDePI = Math.PI.toFixed(2);
volume = valorTruncadoDePI*(raio**2)*altura
console.log(`O volume de um cilindro de raio da base ${raio} e altura ${altura} é igual à ${volume}`);