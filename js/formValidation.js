function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

$("#submitButton").click(function(){

    // Variable messages
    let errorMessage = "";
    let fieldsMissing = "";

    // if fields are missing validation
    if($("#email").val() =""){
        fieldsMissing += "<br>Email";
    }

    if($("#phone").val() =""){
        fieldsMissing += "<br>Telephone";
    }

    if($("#password").val() =""){
        fieldsMissing += "<br>Password";
    }

    if($("#passwordConfirm").val() =""){
        fieldsMissing += "<br>Password Confirm";
    }

    if(fieldsMissing !=""){
        errorMessage += "<p>The following fields are missing: " + fieldsMissing;
    }

    // if the input is not valid
    if(isEmail($("#email").val()) == false){
        errorMessage += "<p>Your email address is not valid</p>";
    }
    if ($.isNumeric($("#phone").val()) == false){
        errorMessage += "<p>Your phone number is not numeric</p>"
    }

    if($("#password").val() != $("#passwordConfirm").val()){
        errorMessage += "<p>Your password don't match</p>";
    }

    // Display error message if errors occur

    if(errorMessage !=""){
        $("#errorMessage").html(errorMessage);
    }
})