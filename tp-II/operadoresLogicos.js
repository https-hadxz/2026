let r = 0 ||'JS' && 5;
console.log(r);
let r2 = "0" && [] || 10;
console.log(r2); 
let r3 = !("false" && 0 || null);
console.log(r3);
let a = 0;
let b = 2;
let r4 = a && ++b;
console.log("r = ", r4, "e b = ", b);
let r5 = (3>2) && (5<1) || (2===2);
console.log(r5);
let r6 = !!("" && []);
console.log(r6);
let r7 = false|| 0 && "x" || "y";
console.log(r7);
let x = 1;
function f (){
    x++; return 0;

}
let r8 = x >1 || f() && x >1
console.log(r8);
let r9 = NaN || "0" && [];
console.log(r9);