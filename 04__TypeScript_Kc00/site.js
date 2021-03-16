// in js, this will give an error because the const, I think you couldn't change it.
// const myname = 'moshe';
// myname = 'avi';
// ------------------------------------------------------
// now we will do the same thing in ts:
// const myname = 'moshe';
// myname = 'avi';
// first way - will bring error but 'seems' that working, second way - won't compile.
// I think the reason on 'non compilation' not shown its because maybe vsc didn't synchronized here???
//  1:
function fact(number) {
    var sum = 1;
    for (var i = 0; i < number; i++) {
        sum *= i;
    }
    console.log(sum);
}
fact(5);
fact('moshe');
//  2:
function fact2(number) {
    var sum = 1;
    for (var i = 0; i < number; i++) {
        sum *= i;
    }
    console.log(sum);
}
fact(5);
fact('moshe');
