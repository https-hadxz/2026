//Função geralmente serve para encurtar código e segmentar ele
// Como declara função?
// function nomeFunc (){
// return "valor"}
// como chamá-la?
// nomeFunc() ou console.log(nomeFunc(){})
// const aula = function (){ 
// return "valor"}
//aula()
//atribui uma função anônima à base de aula
//const func2 = aula()
// diz que a variável é igual à função
//const array = [function (a){return "Olá!"+a+"!"}, aula()]
//console.log(array[0]("Maria"))
//Quando se atribui um valor à variável, ele guarda como uma caixinha na memória
// let x = 0; Guarda uma caixinha na memória com valor 0
//let vetor = [1, 4, "gigi", "etc"] Cria um vetor com várias caixinhas e que começa na posição 0 e vai até a posição 3
//function soma (a, b){
//return function(c){
// return a+b+c}
//}
//console.log(soma(3,4))
//console.log(soma(3,4)(5))
//function soma (){
//let soma = 0
//for(let ; in arguments){
//  soma += arguments[i]
//}
// return soma
//}
//console.log(soma()) (soma(1,2), soma(1,1,2,3,5,8), soma(1,7,10,"texts"))
//function soma (a,b){return a+b}
//const soma2(a,b) => a+b precisa primeiro declarar a função primeiros pra depois ler; já tem que estar com ela na memória;
// quando que eu preciso de chaves? Quandoeu tenho vários procedimentos; precisa da declaração do return se tiver várias linhas de código no arrow function
//const arrow = (a,b) = (a,b) => {ação1, ação2, ação3, return}
//com função não arrow, você pode chamar antes. Com função arrow, não.