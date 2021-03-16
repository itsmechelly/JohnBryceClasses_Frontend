function f1() {
    var radios = document.getElementsByName("rdoColor");
    var choice;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            choice = radios[i].value;
        }
    }
   // console.log("The color is " + choice);
   document.body.style.backgroundColor=choice;
}

function setBackgroundColor(){
    document.body.style.backgroundColor="green";
}

setBackgroundColor();