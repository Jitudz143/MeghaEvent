function print(tag, msg) {
    document.getElementById(tag).innerHTML = msg;
}

function Validation() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();

    nameError = emailError = subjectError = true;
    // for name validation

    if (name.length == 0) {
        print("nameError", "*Required");
    }
    else {
        var rx = /^[a-zA-Z\s]+$/;
        if (rx.test(name) == false) {
            print("nameError", "*Enter Valid Name");
            
        }
        else if (name.length < 4) {
            print("nameError", "*length is too Short");
        
        }
        else {
            print("nameError", '<i class="fa-solid fa-check" style="color:green;"></i>');
            nameError = false;
        }
    }
    

    // for email validation
    if (email.length == 0) {
        print("emailError", "*Required");    
    }
    else {
        print("emailError", '<i class="fa-solid fa-check" style="color:green;"></i>');
        emailError = false;
    }

     // for Subject validation

     if (subject.length == 0) {
        print("subjectError", "*Required");
    }
    else {
            print("subjectError", '<i class="fa-solid fa-check"  style="color:green;"></i>');
            subjectError = false;
        }
    
    if ( nameError || emailError || subjectError  == true) {
        return false;
    }
    else {
     alert('Thank you for your response')
    }

}
