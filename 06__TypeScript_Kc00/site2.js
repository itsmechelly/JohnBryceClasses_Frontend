//Scopes:
// ------------------------------------
//10
var a = 11
console.log(a)

//undifined
console.log(a)
var a = 11

// -------------------------------------

var aa = 10
console.log(aa)

function f1(){
    var bb = 20
    console.log(aa);
    console.log(bb);
}

f1();

// undefined - not in scope
if(false){
    var cc = 30
    console.log(aa);
    console.log(bb);
    console.log(cc);
}

console.log(cc);

// ---------------------------------
// now we will do the same using ***** ' l e t ' ***** instead of 'var', it will give an error

// let aaa = 10
// console.log(aaa)

// function f1(){
//     let bbb = 20
//     console.log(aaa);
//     console.log(bbb);
// }

// f1();

// // undefined - not in scope
// if(false){
//     let ccc = 30
//     console.log(aaa);
//     console.log(bbb);
//     console.log(ccc);
// }

// console.log(ccc);

// -----------------------------------------------------------

// ---------------------------------
// now we will do the same using ***** ' c o n s t ' ***** instead of 'var',
// const means you can initialize the object only in the line you define it. so it safer then let.
// in this case it also give an error.
// const its like let, the different is that let is 'scopeable'.

// let aaa = 10
// console.const(aaa)

// function f1(){
//     const bbb = 20
//     console.log(aaa);
//     console.log(bbb);
// }

// f1();

// // undefined - not in scope
// if(false){
//     const ccc = 30
//     console.log(aaa);
//     console.log(bbb);
//     console.log(ccc);
// }

// console.log(ccc);

// to see how to solve this problem we will usr type script >>> go to site.ts.