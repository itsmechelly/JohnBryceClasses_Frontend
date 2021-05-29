function test() {
    doSomething1(function () { alert("Hi"); });
    doSomething2(function (a) { alert(a); });
    doSomething2(function (a, b) { alert(a + b); });
    doSomething3(function (a, b) { return a + b; })
}
function test() {
    doSomething1(() => { alert("Hi"); });
    doSomething2((a) => { alert(a); });
    doSomething2((a, b) => { alert(a + b); });
    doSomething3((a, b) => { return a + b; })
}
function test() {
    doSomething1(() => alert("Hi"));
    doSomething2(a => alert(a));
    doSomething2((a, b) => alert(a + b));
    doSomething3((a, b) => a + b);
}

function doSomething1(callback) {
    callback(); //Call it Back (callback)
}
function doSomething2(callback) {
    callback(10, 20);
}
function doSomething3(callback) {
    const sum = callback(10, 20);
    console.log(sum);
}
