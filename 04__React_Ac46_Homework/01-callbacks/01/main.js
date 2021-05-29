function test() {
    writeMyName(function () { alert("Chelly"); });
};

//-----------------------------------------------------------------------------------------

function test() {
    writeMyName(() => alert("Chelly"));
};

//-----------------------------------------------------------------------------------------

function writeMyName(callback) {
    callback();
};
