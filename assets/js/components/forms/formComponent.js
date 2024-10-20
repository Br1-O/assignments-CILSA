//length validation
export const minLengthValidation = (field, errorMessageField, length, message) => {
    const regexMinLength = new RegExp(`^.{${length},}$`);

    if (!regexMinLength.test(field.value)) {
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

    if (!regexMaxLength.test(field.value)) {
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

    if (!regexInRangeLength.test(field.value)) {
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

    if (!(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(field.value))) {

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "El campo sólo puede poseer caracteres alfabeticos.";
    
        field.focus();

        return false;
    }
    
    return true;
}

//numeric validation
export const isNum = (field, errorMessageField) => {

    if (!(/^[0123456789.]+$/.test(field.value))) {

        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "El campo sólo puede poseer caracteres númericos y .";
    
        field.focus();

        return false;
    }
    
    return true;
}

//email validation
export const emailValidation = (emailField, errorMessageField) => {

    //regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLength10 = /^.{10,}$/;

    //check if email is empty
    if (emailField.value == "") {
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*este campo es obligatorio";
    
        emailField.focus();

        return false;
    }
    //check if email has minimum length
    else if(!regexLength10.test(emailField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el correo es demasiado corto";

        emailField.focus();

        return false;
    }
    //check if email is valid
    else if(!regexEmail.test(emailField.value)){
        //display error message
        errorMessageField.classList.remove("d-none");
        errorMessageField.innerText = "*el correo debe ser válido";

        emailField.focus();

        return false;
    }else{
        return true;
    }
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

class FormComponent extends HTMLElement{
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const template = document.createElement('template');

        template.innerHTML =
        `
        <style>
            form{
                max-width: 50%;
                margin: auto;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;

                padding: 1rem;

                background-color: rgba(0, 0, 150, 0.5);

                border-radius: 15px;

                color: white;
                font-size: max(1.25vmax, 1.25rem);
            }
        </style>

        <form>
            <slot></slot>
        </form>
        `;

        const templateContent = template.content.cloneNode(true);

        shadowRoot.appendChild(templateContent);

        this.formElement = shadowRoot.querySelector('form');

        console.log(shadowRoot);
    }    


    // Observe these attributes for changes
    static get observedAttributes() {
        return ['id', 'classList'];
    }

    // Callback whenever an observed attribute is added, removed, or changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'id') {
            this.formElement.id = newValue;
        } else if (name === 'classList') {
            this.formElement.className = newValue; // Assign classes dynamically
        }
    }

    // Lifecycle method called when the element is connected to the document
    connectedCallback() {
        // Initialize the attributes
        this.updateAttributes();
    }

    // Helper method to update input attributes based on element attributes
    updateAttributes() {
        if (this.hasAttribute('id')) {
            this.formElement.id = this.getAttribute('id');
        }
        if (this.hasAttribute('classList')) {
            this.formElement.className = this.getAttribute('classList');
        }
    }
}

customElements.define("form-component", FormComponent);