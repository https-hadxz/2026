const prompt = require('prompt-sync')();
let palavra = prompt("Digite uma palavra: ")
let letra = prompt("\nAgora digite uma letra: ")
pos = 0
const maiusculo = () => {
    return palavra.toLocaleUpperCase();
}
const minusculo = () => {
    return palavra.toLocaleLowerCase();
}
for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] == letra) pos = i
}
console.log(palavra.length + " caracteres")
console.log(maiusculo(palavra))
console.log(minusculo(palavra))
console.log(`
    Aluno: ${palavra}
    O nome digitado foi: ${palavra}\n
    A letra pesquisada foi: ${letra}\n
    O nome possui ${palavra.length} caracteres\n
    Todo o texto em maiúsculo: ${maiusculo()}\n
    Todo o texto minúsculo: ${minusculo()}\n
    `)