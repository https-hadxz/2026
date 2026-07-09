function soma (a,b,c,d,e=1){
    a = a||1
    b = b !== undefined ? b : 1
    c = 2 in arguments ? c:1
    d = isNaN(d)? 1 : d
    return a+b+c+d+e
}
console.log(soma(), soma(2), soma(1,2,3,4), soma(0,0,0,0,0))