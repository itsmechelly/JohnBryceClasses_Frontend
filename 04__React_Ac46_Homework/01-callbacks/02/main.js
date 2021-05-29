function test() {
    cool(function () { alert(Math.floor(Math.random() * 100)); });
};

//-----------------------------------------------------------------------------------------

function test() {
    cool(() => alert(Math.floor(Math.random() * 10000)));
};

//-----------------------------------------------------------------------------------------

function cool(callback) {
    callback();
}
