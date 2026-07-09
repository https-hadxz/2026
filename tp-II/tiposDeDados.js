 let resultado = NaN;
console.log(!!resultado)
let listaVazia = [];
let objetoVazio = {};
console.log(!!listaVazia, !!objetoVazio)
let cidadeComValor = ""
let cidadePadrao = 'São Paulo'
console.log(cidadeComValor||cidadePadrao)
let isLogado
console.log(!!(isLogado = 0))
let a = Infinity;
let b = -1;
console.log(!a)
console.log(!b)
console.log(!!(0||null||''||undefined||' '))
let x = null;
let y = undefined;
console.log(!!x===!!y)