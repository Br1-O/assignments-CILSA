export const form = (id = "") => {

    let form =
    `   
    <form id="${id}" class="container d-flex flex-column justify-content-center align-items-center p-3 rounded col-12 col-md-8 col-xl-4 fs-3 fw-2 bg-glass-effect-darker" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">
           <div class="highContrastTheme">
                <button id="bntHighContrast" class="form-btn"> Estilo de Alto Contraste </button>
            </div>
    
        <div id="form-container" class="container-fluid row d-flex flex-row justify-content-center">
            <div class="col-12">
                <div class="input-group mb-3 d-flex flex-column justify-content-center align-items-start gap-3 w-100">
                    <label for="fullName" class="form-label" id="label-name">Nombre</label>
                    <input type="text" id="fullName" class="form-control rounded w-100 mx-auto" name="fullName" placeholder="Ingrese su nombre" aria-labelledby="label-name">
                    <p id="errorNameContactForm" class="error d-none fs-6" aria-live="polite" role="alert"></p>
                </div>

                <div class="input-group mb-3 d-flex flex-column justify-content-center align-items-start gap-3 w-100">
                    <label for="lastName" class="form-label" id="label-lastName"> Apellido </label>
                    <input type="text" id="lastName" class="form-control rounded w-100 mx-auto" name="lastName" placeholder="Ingrese su apellido" aria-labelledby="label-lastName">
                    <p id="errorLastNameContactForm" class="error d-none fs-6" aria-live="polite" role="alert"></p>
                </div>

                <div class="input-group mb-3 d-flex flex-column justify-content-center align-items-start gap-3 w-100">
                    <label for="email" class="form-label" id="label-email">Correo electronico</label>
                    <input type="text" id="email" class="form-control rounded w-100 mx-auto" name="email" placeholder="Ingrese su Correo Electronico" aria-labelledby="label-email">
                    <p id="errorEmailContactForm" class="error d-none fs-6" aria-live="polite" role="alert"></p>
                </div>

                <div class="input-group mb-3 d-flex flex-column justify-content-center align-items-start gap-3 w-100">
                    <label for="subject" class="form-label" id="label-subject">Asunto</label>
                    <input type="text" id="subject" class="form-control rounded w-100 mx-auto" name="subject" placeholder="Ingrese el motivo de su mensaje" aria-labelledby="label-subject">
                    <p id="errorSubjectContactForm" class="error d-none fs-6" aria-live="polite" role="alert"></p>
                </div>

                <div class="input-group mb-3 d-flex flex-column justify-content-center align-items-start gap-3 w-100">
                    <label for="message" class="form-label" id="label-message">Mensaje</label>
                    <textarea type="text" id="message" class="form-control rounded w-100 mx-auto" name="message" placeholder="Escriba su mensaje" aria-labelledby="label-message"></textarea>
                    <p id="errorMessageContactForm" class="error d-none fs-6" aria-live="polite" role="alert"></p>
                </div>

                <input type="submit" class="form-btn mx-auto" value="Enviar mensaje">
            </div>
        </div>
    </form>
    `;

    return form;
}