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





// Lógica Javascript del componente
class InputField extends HTMLElement {
    constructor() {
        super();  // Always call super() first in the constructor.
        
        // Attach a shadow DOM to the custom element.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const template = document.createElement("template");

        let inputTemplate = 
        `
        <style>

            input{
                margin: auto;

                padding: 0.25rem;

                background-color: rgba(0, 0, 150, 0.5);

                border-radius: 10px;

                color: white;
                font-size: max(1.25vmax, 1.25rem);
            }

            label{
                margin: auto;
            }
        </style>
        `;
        
        if (this.type === "password") {

            inputTemplate += `
                <p class="error d-none"></p>
                <div>
                    <label> </label>
                    <input>
                    <i class='bx bx-low-vision display-password' aria-label="show hide password eye icon"></i>
                </div>
            `
        } else {

            inputTemplate += `
                <p class="error d-none"></p>
                <div>
                    <label> </label>
                    <input>
                </div>
            `
        }

        template.innerHTML = inputTemplate;

        const templateContent = template.content.cloneNode(true);
        
        // Append the template content to the shadow DOM.
        shadowRoot.appendChild(templateContent);

        // Reference to the label and input elements inside the shadow DOM
        this.labelElement = shadowRoot.querySelector('label');
        this.inputElement = shadowRoot.querySelector('input');
        this.pElement = shadowRoot.querySelector('p');

        this.pElement.id = 'errorFieldFor' + this.getAttribute('name');

        if (this.hasAttribute('fieldValue')) {
            const fieldValue = this.getAttribute('fieldValue');
            this.inputElement.value = fieldValue;
        }
    }

    // Observe these attributes for changes
    static get observedAttributes() {
        return ['id', 'type', 'placeholder', 'name', 'labelText', 'ariaLabel', 'fieldValue', 'classes', 'validations'];
    }

    // Callback whenever an observed attribute is added, removed, or changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'id') {
            this.inputElement.id = newValue;
        } else if (name === 'type') {
            this.inputElement.type = newValue;
        } else if (name === 'placeholder') {
            this.inputElement.placeholder = newValue;
        } else if (name === 'name') {
            this.inputElement.name = newValue;
        } else if (name === 'classes') {
            this.inputElement.className = newValue; // Assign classes dynamically
        }
        else if (name === 'validations') {
            this.inputElement.validations = newValue;
        }
    }

    // Lifecycle method called when the element is connected to the document
    connectedCallback() {
        // Initialize the attributes
        this.updateAttributes();

        //add validation event on change

        this.inputElement.addEventListener("change", () => {
            console.log("holi");
            if (this.inputElement.value != "") {
                this.validate();
            }else{
                const errorField = this.pElement;
                errorField.innerText = "";
                errorField.classList.add("d-none");
            }
        })
    }

    // Helper method to update input attributes based on element attributes
    updateAttributes() {
        if (this.hasAttribute('id')) {
            this.inputElement.id = this.getAttribute('id');
        }
        if (this.hasAttribute('type')) {
            this.inputElement.type = this.getAttribute('type');
        }
        if (this.hasAttribute('placeholder')) {
            this.inputElement.placeholder = this.getAttribute('placeholder');
        }
        if (this.hasAttribute('name')) {
            const nameAttr = this.getAttribute('name');
            this.inputElement.name = nameAttr;
            this.labelElement.setAttribute('for', nameAttr); // Update the label's 'for' attribute
        }
        if (this.hasAttribute('labelText')) {
            const labelText = this.getAttribute('labelText');
            this.labelElement.textContent = labelText; // Set the label's text content
        }
        if (this.hasAttribute('ariaLabel')) {
            const ariaLabel = this.getAttribute('ariaLabel');
            this.inputElement.setAttribute('aria-label', ariaLabel);
        }
        if (this.hasAttribute('classes')) {
            this.inputElement.className = this.getAttribute('classes');
        }
        if (this.hasAttribute('validations')) {
            this.inputElement.className = this.getAttribute('validations');
        }
    }

    validate = () => {

        const inputField = this.inputElement;
        const errorField = this.pElement;
        const inputType = this.inputElement.type;
        const inputName = this.inputElement.name;

        let isValid = false;

        switch (inputType) {
            case "text":
                switch (inputName) {
                    case "name":
                    case "surname":
                    case "city":
                    case "region":
                    case "country":
                    case "from_country":
                    case "material": 
                    {                
                        let validMinLength = minLengthValidation(inputField, errorField, 3, "El campo debe tener al menos 3 caracteres");
                        let validMaxLength = maxLengthValidation(inputField, errorField, 20, "El campo no puede exceder los 20 caracteres");
                        let validChar = isAlpha(inputField, errorField);

                        isValid = validMinLength && validMaxLength && validChar;
                        break;
                    }

                    case "description":
                    {                
                        let validMinLength = minLengthValidation(inputField, errorField, 3, "El campo debe tener al menos 3 caracteres");
                        let validMaxLength = maxLengthValidation(inputField, errorField, 100, "El campo no puede exceder los 100 caracteres");
                        let validChar = isAlpha(inputField, errorField);

                        isValid = validMinLength && validMaxLength && validChar;
                        break;
                    }

                    case "phone":
                        isValid = phoneNumberValidation(inputField, errorField);
                        break;

                    case "price":
                    case "discount":
                    {
                        let validMinLength = minLengthValidation(inputField, errorField, 1, "El campo debe tener al menos 1 caracter");
                        let validMaxLength = maxLengthValidation(inputField, errorField, 20, "El campo no puede exceder los 20 caracteres");
                        let validNum = isNum(inputField, errorField);

                        isValid = validMinLength && validMaxLength && validNum;
                        break;
                    }   

                    default:
                    {
                        let validMinLength = minLengthValidation(inputField, errorField, 3, "El campo debe tener al menos 3 caracteres");
                        let validMaxLength = maxLengthValidation(inputField, errorField, 20, "El campo no puede exceder los 20 caracteres");

                        isValid = validMinLength && validMaxLength;
                        break;
                    }
                }
                break;

            case "email":
                if (inputName === "emailConfirm" && fieldToCompareTo) {
                    isValid = areValuesEqual(inputField, fieldToCompareTo, errorField, "¡Los correos deben coincidir!");
                } else {
                    isValid = emailValidation(inputField, errorField);
                }
                break;

            case "password":
                isValid = passwordValidation(inputField, errorField);
                break;

            default:
                isValid = false;
                break;
        }

        if (isValid) {
            errorField.innerText = "";
            errorField.classList.add("d-none");
        }

        console.log(errorField);
    };
}

customElements.define("input-field", InputField);