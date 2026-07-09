const pessoa ={
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const alguem = pessoa.falar.bind(pessoa)
alguem()
//função biding 