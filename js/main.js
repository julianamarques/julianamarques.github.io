function showOrHideEmail() {
    var email = document.getElementById("email").style.opacity;

    if(email == "0") {
        document.getElementById("email").style.opacity = "1";
    }

    else {
        document.getElementById("email").style.opacity = "0";
    }
}