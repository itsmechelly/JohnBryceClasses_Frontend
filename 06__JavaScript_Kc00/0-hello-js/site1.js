// console.log("Moshe");

// function factorial(){
//     var num = 5;
//     var sum = 1;
//     for (let i = 1; i <= num; i++) {
//         sum=sum*i;

//     }

//     console.log(sum,sum,sum);
// }

// factorial();
// factorial();
// factorial();

function changeColor() {
    document.getElementById("p1").innerHTML = "Moshe";
    document.getElementById("p1").style.color = "#aabbcc";
    document.getElementById("p1").style.backgroundColor = "#6a6b3c"
}

changeColor();



// function stringManipulate(){
//     var str = "822.123";
//     alert(str.substring(4));
// }

// stringManipulate();


// function stringSplit(){
//     var str = "Java 822.123 with Kobi - Best course in the world";
//     var arr = str.split(" ");
//     alert(arr[0]+ " "+ arr[1]+" "+arr[2]+ " "+arr[3]+"!");

// }

// stringSplit();

// function replaceAndMore(){
//     var str = "Hello World";
//     console.log(str);
//     str = str.replace("World","Moshe");
//     console.log(str);
// }

// replaceAndMore();

// function goToYnet(){
//     var str = new String("Go to Ynet");
//     var strLink = str.link("http://www.ynet.co.il");
//     alert(strLink);
// }

// goToYnet();

function stam() {
    var arr = new Array("I", "love", "JS");
    arr.reverse();
    alert(arr);
}

stam();