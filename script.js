
function submitForm() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let profession = document.getElementById("profession").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    if (firstName === "" ? true : resetErrors() || firstName.length < 3) {
        return document.getElementById("firstNameError").innerHTML = "* FirstName cannot be less than 3-characters!";
    }

    else if (lastName === "" ? true : resetErrors() || lastName.length < 3) {
        return document.getElementById("lastNameError").innerHTML = "* LastName cannot be less than 3-characters!";
    }

    else if (dob === "" ? true : resetErrors()) {
        return document.getElementById("dobError").innerHTML = "* DOB-field is required!";
    }

    else if (country === "" ? true : resetErrors()) {
        return document.getElementById("countryError").innerHTML = "* Country-field is required!";
    }

    else if (!gender ? true : resetErrors()) {
        return document.getElementById("genderError").innerHTML = "* Gender-field is required!";
    }

    else if (profession === "" || profession.length < 3) {
        return document.getElementById("professionError").innerHTML = "* profession-field cannot be less than 3 characters!";
    }

    else if (mobile === "" || mobile.length < 10 || mobile.length > 10 )
    {
        return document.getElementById("mobileError").innerHTML = "* number should be 10-digits!";
    }

    else if (emailValidator(email)!==true || email ==="") {   
        return document.getElementById("emailError").innerHTML = "* Enter Valid email address!";
    }
   
    else {
        
        let popupContent = "First Name: " + firstName + "\n";
        popupContent += "Last Name: " + lastName + "\n";
        popupContent += "Date of Birth: " + dob + "\n";
        popupContent += "Country: " + country + "\n";
        popupContent += "Gender: " + gender.value + "\n";
        popupContent += "Profession: " + profession + "\n";
        popupContent += "Mobile Number: " + mobile + "\n";
        popupContent += "Email: " + email + "\n";

        alert(popupContent);
        
    }

}

function resetForm() {
    document.getElementById("surveyForm").reset();
    resetErrors();
}

function resetErrors() {
    let nodeList = document.querySelectorAll(".error-msg");
    let errorElements = Array.from(nodeList);
    errorElements.forEach(function (element) {
        element.innerHTML = "";
    })
}

 function emailValidator(email) {

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);

 }


