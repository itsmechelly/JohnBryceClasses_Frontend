function f1(){
    alert("Linkes : " + document.links.length + " , Images : " + document.images.length);
    //document.getElementById("myheader").innerText="I Love cats!"
    document.getElementById("myheader").innerHTML = `<u>I Love cats!</u>`;
    var txt1 = document.getElementById("s1").textContent;
    var txt2 = document.getElementById("s2").textContent;

    if (txt1 == txt2) {
        document.getElementById("res").innerHTML = "Spans Are Equals"
    } else {
        document.getElementById("res").innerHTML = "Spans Are NOT Equals"
    }
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.color = "red";
        }
    }  
}

f1();