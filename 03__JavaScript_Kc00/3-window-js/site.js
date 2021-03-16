function f1(){
    window.alert("Welcome 822.123!")
}

function f2(){
    window.alert(window.location)
}

function f3(){
    var result = window.confirm("Are you like JS?")
    window.alert(result);
    console.log(result);
}

function f4(){
    var res = window.prompt("What is your favorite programming languae?","Javush");
    window.alert("You are like "+res);
    console.log("You are like "+res);
}