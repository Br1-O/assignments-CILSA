import { subtitle } from "../../components/text/titles.js";
import { accordion } from "../../components/dataDisplayers/accordion.js";

export const accesibilityPage = `

<section class="row position-relative d-flex flex-column justify-content-center align-items-center p-3 gap-3 w-100">

    <div class="p-5" style="min-height: 100vh;">
        ${subtitle({text: "Accesibilidad y Analisis del formulario", textColor: "var(--font-color)", indexOfHighlightWord: 4, highlightColor: "var(--font-secondary-color)"})}

        <div class="d-flex flex-row justify-content-center align-items-center">
        ${accordion(
            "accordionAccesibility",
            [
                {
                    title: "Pasos para acceder al formulario",
                    text: [
                    "» Abrir el archivo del formulario en un navegador web compatible con las técnologias usadas.",
                    "» Utilizar la tecla TAB para alternar entre los campos del formulario y así recorrerlo, pudiendo acceder a ellos y editar sus valores.",
                    "» Ingresar los datos acorde a lo indicado por el nombre del campo, pudiendo estos ser: nombre, apellido, email, asunto, mensaje",
                    "» Al ingresar los datos y enviarlos, se deberá verificar que sus valores sean correctos. Si el formato del dato ingresado no es válido los datos no se enviaran y se mostrará un mensaje de error para guiar al usuario.",
                    "» Finalmente al presionar el botón de 'Enviar' se enviaran los datos y, si todos responden a formatos válidos, aparecerá un mensaje de confirmación para informar al usuario que la acción se ha completado éxitosamente."
                    ]
                },
                {
                    title: "Validaciones de valores",
                    text: [
                    "» Nombre y Apellido: Valores válidos incluyen cualquier combinación de letras y espacios. Valores inválidos serían caracteres especiales o números en estos campos. También se implementó una comprobación de caracteres minimos y máximos, que va de 3 a 30 caracteres.",
                    "» Asunto y Mensaje: Valores válidos incluyen cualquier combinación de letras y espacios. Valores inválidos serían caracteres especiales o números en estos campos. También se implementó una comprobación de caracteres minimos y máximos, que va de 3 a 30 caracteres.",
                    "» Email: Los datos ingresados deben tener un formato de dirección de correo electrónico válido (por ej: address@SMTPname.com). Si los datos ingreados no contienen '@' o no tienen un formato de dominio válido serían inválidos."
                    ]
                },
                {
                    title: "Accesibilidad con el lector de pantalla NVDA",
                    text: [
                        "» El acceso se hace mediante la tecla TAB, el lector NVDA permite navegar por cada campo de esta forma, incluyendo etiquetas gracias al atributo 'labeledBy' de los elementos input, botones, titulos e hipervinculos disponibles.",
                        "» El que el lector lea las etiquetas Label permite al usuario saber qué dato se espera en el campo, y así mismo se informa que donde se está actualmente es un campo editable.",
                        "» De existir errores en la validación (nombre o email incorrecto), el lector lee el mensaje de error asociado al campo donde existe dicho error en la validación gracias al atributo 'aria-live' y el 'role=alert', así mismo detecta el campo como inválido debido al atributo 'aria-invalid=true'.",
                        "» Así mismo el lector detecta correctamente el botón de 'Enviar mensaje', lo que fácilita al usuario el ejecutar la acción mediante la tecla 'enter'."                    ]
                }
            ]
        )}
        </div>
    </div>

</section>
`;