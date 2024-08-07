function validateForm() {
    var name = document.forms["blogForm"]["name"];
    var email = document.forms["blogForm"]["email"];
    var message = document.forms["blogForm"]["message"];

    if (name.value.trim() == "") {
        document.getElementById('errorname').innerHTML = "Veuillez entrer un nom valide";
        name.focus();
        return false;
    } else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (email.value.trim() == "") {
        document.getElementById('erroremail').innerHTML = "Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    }

    if (message.value.trim() == "") {
        document.getElementById('errormsg').innerHTML = "Veuillez entrer un message valide";
        message.focus();
        return false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }

    return true;
}
