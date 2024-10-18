import { subtitle } from "../../components/text/titles.js";
import { form } from "../../components/forms/form.js";

export const formPage = `

<section id="contact" class="row position-relative d-flex flex-column justify-content-center align-items-center p-3 gap-3 w-100">

    <div class="col-12">
        ${subtitle({text: "Formulario usando bootstrap", textColor: "var(--font-color)", indexOfHighlightWord: 2, highlightColor: "var(--font-secondary-color)"})}

        ${form("form-contact")}
    </div>

</section>
`;