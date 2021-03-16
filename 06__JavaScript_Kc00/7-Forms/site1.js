function ShowGender() {
    var radios = document.getElementsByName("rdoGender"); 
    var choice;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            choice = radios[i].value;
        }
    }
    alert("The gender is " + choice);
}