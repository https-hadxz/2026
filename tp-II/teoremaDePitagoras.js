const teclado = require("prompt-sync")();
let x1, x2, y1, y2, distancia
x1 = teclado("Informe um valor para x1: ");
x2 = teclado("Informe um valor para x2: ");
y1 = teclado("Informe um valor para y1: ");
y2 = teclado("Informe um valor para y2: ");
distancia = ((x2-x1)**2+(y2-y1)**2)**(1/2)
console.log(`A hipotenusa calculada dos catetos ((x2-x1)**2+(y2-y1)**2)**(1/2) é ${distancia.toFixed(2)}`)
