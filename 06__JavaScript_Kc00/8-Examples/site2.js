function plus(){
    alert(firstNumber()+secondNumber());
}

function minus(){
    alert(firstNumber()-secondNumber());
}

function mult(){
    alert(firstNumber()*secondNumber());
}

function div(){
    var div = secondNumber();
    if(div==0){
        alert("cannot divide by zero")  
    }else{
        alert(firstNumber()/div);
    }
    
}

function firstNumber(){
    return parseInt(document.forms[0].elements[0].value);
}

function secondNumber(){
    return parseInt(document.forms[0].elements[1].value);
}

function validNumbers(){
    if(document.forms[0].elements[0].value.length==0){
        document.getElementById("n1").innerText="Empty";
        document.getElementById("n1").style.color="red";
    }else{
        document.getElementById("n1").innerText="";
    }
    if(document.forms[0].elements[1].value.length==0){
        document.getElementById("n2").innerText="Empty";
        document.getElementById("n2").style.color="red";
    }else{
        document.getElementById("n2").innerText="";
    }

}

validNumbers();