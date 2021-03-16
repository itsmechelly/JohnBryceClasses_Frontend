var COUNT = 0;
function myFunc() {
    console.log('Hello World!');
    alert("Hello World");
}

function changeColor() {
    var content = document.getElementById("txt").value;
    if (content.length % 2 == 0) {
        document.getElementById("txt").style.color = "red";
    } else {
        document.getElementById("txt").style.color = "green";
    }
}

function showMessage(){
    alert(document.getElementById("txt").value);
}

function countMouseOverImage(){
    COUNT++;
    console.log(COUNT);
}

function countTotal(){
    alert("Cat was maouse overed : " + COUNT + " times");
}

function checkIfAllGood(){
    var content1 = document.getElementById("txt1").value;
    var content2 = document.getElementById("txt2").value;
    var content3 = document.getElementById("txt3").value;
    if(content1.length>0 && content2.length>0&& content3.length>0){
        alert("OK")
    }else{
        alert("Please fill in the text inputs")
    }
}