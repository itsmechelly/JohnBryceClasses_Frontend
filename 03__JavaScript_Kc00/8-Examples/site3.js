function goToServer() {


    if (getUsername() == "good" && getPassword() == "day!") {
        var result = "Good day!"
        if (getRememberMe()) {
            result += "Going to save username : " + getUsername() + " , password : " + getPassword();
        }
        alert(result);
        window.location.replace("http://www.w3schools.com");
    } else {
        alert("bad day");
    }
}

function getUsername() {
    return document.forms[0].elements[0].value;
}

function getPassword() {
    return document.forms[0].elements[1].value;;
}


function getRememberMe() {
    return document.forms[0].elements[2].checked;
}