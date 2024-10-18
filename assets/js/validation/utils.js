//length validation
export const minLengthValidation = (field, errorMessageField, length, message) => {
    const regexMinLength = new RegExp(`^.{${length},}$`);

    //remove aria-invalid in case an error happened before
    field.removeAttribute('aria-invalid');

    if (!regexMinLength.test(field.value)) {
        //set as invalid for screen reader
        field.setAttribute('aria-invalid', 'true');

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = message;
    
        field.focus();

        return false;
    } else {
        return true;
    }

}

export const maxLengthValidation = (field, errorMessageField, length, message) => {
    const regexMaxLength = new RegExp(`^.{0,${length}}$`);

    //remove aria-invalid in case an error happened before
    field.removeAttribute('aria-invalid');

    if (!regexMaxLength.test(field.value)) {
        //set as invalid for screen reader
        field.setAttribute('aria-invalid', 'true');

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = message;
    
        field.focus();

        return false;
    } else {
        return true;
    }

}

export const inRangeLengthValidation = (field, errorMessageField, min, max, message) => {
    const regexInRangeLength = new RegExp(`^.{${min},${max}}$`);

    //remove aria-invalid in case an error happened before
    field.removeAttribute('aria-invalid');

    if (!regexInRangeLength.test(field.value)) {

        //set as invalid for screen reader
        field.setAttribute('aria-invalid', 'true');

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = message;
    
        field.focus();

        return false;
    } else {
        return true;
    }
}

//alpha validation
export const isAlpha = (field, errorMessageField) => {

    //remove aria-invalid in case an error happened before
    field.removeAttribute('aria-invalid');

    if (!(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(field.value))) {

        //set as invalid for screen reader
        field.setAttribute('aria-invalid', 'true');

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el campo sólo puede poseer caracteres alfabeticos.";
    
        field.focus();

        return false;
    }
    
    return true;
}

//numeric validation
export const isNum = (field, errorMessageField) => {

    //remove aria-invalid in case an error happened before
    field.removeAttribute('aria-invalid');

    if (!(/^[0123456789.]+$/.test(field.value))) {
        //set as invalid for screen reader
        field.setAttribute('aria-invalid', 'true');

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el campo sólo puede poseer caracteres númericos y .";
    
        field.focus();

        return false;
    }
    
    return true;
}

//email validation
export const emailValidation = (emailField, errorMessageField) => {

    //remove aria-invalid in case an error happened before
    emailField.removeAttribute('aria-invalid');

    //regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLength10 = /^.{10,}$/;

    //check if email is empty
    if (emailField.value == "") {
        //set as invalid for screen reader
        emailField.setAttribute('aria-invalid', 'true');
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*este campo es obligatorio";
    
        emailField.focus();

        return false;
    }
    //check if email has minimum length
    else if(!regexLength10.test(emailField.value)){
        //set as invalid for screen reader
        emailField.setAttribute('aria-invalid', 'true');
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el correo es demasiado corto";

        emailField.focus();

        return false;
    }
    //check if email is valid
    else if(!regexEmail.test(emailField.value)){
        //set as invalid for screen reader
        emailField.setAttribute('aria-invalid', 'true');
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el correo debe ser válido";

        emailField.focus();

        return false;
    }else{
        return true;
    }
}

//name validation
export const nameValidation = (inputField, errorMessageField, minLength = 3, maxLength = 30) => {

    //remove aria-invalid in case an error happened before
    inputField.removeAttribute('aria-invalid');

    // Reset error message field
    errorMessageField.classList.add("d-none");
    errorMessageField.innerText = "";
    

    // Check if input is only alphabetic
    if (!isAlpha(inputField, errorMessageField)) {
        inputField.setAttribute('aria-invalid', 'true');
        return false;
    }

    // Check minimum length
    if (!minLengthValidation(inputField, errorMessageField, minLength, "*el nombre es muy corto")) {
        inputField.setAttribute('aria-invalid', 'true');
        return false;
    }

    // Check maximum length
    if (!maxLengthValidation(inputField, errorMessageField, maxLength, "*el nombre es muy largo")) {
        inputField.setAttribute('aria-invalid', 'true');
        return false;
    }

    // If all validations pass
    return true;
}

//password validation
export const passwordValidation = (passwordField, errorMessageField) => {

    //regex
    const regexPassword = /^(?=.*[0-9])(?=.*[.,*_\-+?¡!¿])(?=.*[A-Z]).{8,}$/;
    const regexLength8 = /^.{8,}$/;

    //check if password is empty
    if(passwordField.value == "") {
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*este campo es obligatorio";
    
        passwordLogin.focus();

        return false;
    }
    //check if password has minimum length
    else if(!regexLength8.test(passwordField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*la contraseña debe tener al menos 8 caracteres";

        passwordField.focus();

        return false;
    }
    //check if password is valid
    else if(!regexPassword.test(passwordField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*la contraseña debe contener al menos un número, una mayuscula y un simbolo (*.,¡!¿?-_+)";

        passwordField.focus();

        return false;
    }else{
        return true;
    }
}

//check if values match
export const areValuesEqual = (firstField, secondField, errorMessageField, message) => {
    if(firstField.value != secondField.value){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = message;
        
        secondField.focus();

        return false;
    }else{
        return true;
    }
}

//phone number validation
export const phoneNumberValidation = (phoneField, errorMessageField, isRequired = true) => {

    //regex
    const regexPhoneNumber = /^[\d\s\+\-\(\)]{7,20}$/;
    const regexMinLength9 = /^.{7,}$/;
    const regexMaxLength20 = /^.{0,20}$/;

    //check if phone is empty and if it is not required
    if(phoneField.value == "" && !isRequired) {
        return true;
    }
    //check if phone is empty and if it is required
    else if(phoneField.value == "" && isRequired) {
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*este campo es obligatorio";
    
        phoneField.focus();

        return false;
    }
    //check if password has minimum length
    else if(!regexMinLength9.test(phoneField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el telefono debe poseer al menos 7 caracteres";

        phoneField.focus();

        return false;
    }
    //check if password has minimum length
    else if(!regexMaxLength20.test(phoneField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el telefono debe poseer como máximo 20 caracteres";

        phoneField.focus();

        return false;
    }
    //check if password is valid
    else if(!regexPhoneNumber.test(phoneField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el telefono sólo puede contener números y los caracteres: + - ( )";

        phoneField.focus();

        return false;
    }else{
        return true;
    }


}
