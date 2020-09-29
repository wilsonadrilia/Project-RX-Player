function Validate(){

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var pass = document.getElementById("password").value;
    var passConf = document.getElementById("confirm-pass").value;
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passReg = /^[0-9A-Za-z]\w{7,14}$/;
    var val = document.getElementById("option").selectedIndex;
    var opt = document.getElementsByTagName("option")[val].value;
    var g = document.getElementById("checkbox").checked;

    if ( firstName == "" ){
        alert ("Must fill the empty form.");
        return false;
    }

    if ( lastName == ""){
        alert("Must fill the empty form.");
        return false;
    }

    if ( email == ""){
        alert("Must fill the empty form.");
        return false;
    }

    if ( gender == ""){
        alert("Must fill the empty form.");
        return false;
    }

    if ( pass == ""){
        alert ("Must fill the empty form.");
        return false;
    }

    if ( passConf == ""){
        alert ("Must fill the empty form.");
        return false;
    }

    if( !emailReg.test(email) ){
        alert("Must enter a valid email address.");
        return false;
    }

    if ( gender != "Male" && gender != "Female" && gender != "male" && gender != "female"){
        alert("Choose gender between male or female");
        return false;
    }

    if( !passReg.test(pass) ){
        alert("Password must be 8 - 15 characters.");
        return false;
    }

    if ( pass != passConf){
        alert ("Password does not match. Try again.");
        return false;
    }
    
    if (opt ==1 || opt ==2){
    }else{
        alert("Choose payment method.");
        return false;
    }

    if(g ==false){
        alert("Agree to terms and conditions");
        return false;
    }

}
