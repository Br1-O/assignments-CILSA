import { subtitle } from "../../components/text/titles.js";
import { billboard } from "../../components/dataDisplayers/billboard.js";


export const homeContent = `

<section class="row position-relative d-flex flex-column justify-content-start align-items-center p-3 gap-3 w-100" style="min-height:100vh;">

    <div class="col-12 md:col-8 lg:col-5 p-5 d-flex flex-column justify-center align-items-center">
        ${subtitle({text: "Bootcamp Fullstack Js de CILSA", textColor: "var(--font-color)", indexOfHighlightWord: 4, highlightColor: "var(--font-secondary-color)"})}

       ${billboard(
        "billboard-main",
        [
        {
            adImg: "assets/resources/img/images/CILSA_logo_banner.png",
            adAlt: "Banner informativo de Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/C7zbb0HPxh5",
        },
        {
            adImg: "assets/resources/img/images/avances1.jpg",
            adAlt: "Banner informativo de testimonios del Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances2.jpg",
            adAlt: "testimonio 1 de experiencia y avances en el Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances3.jpg",
            adAlt: "testimonio 2 de experiencia y avances en el Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances4.jpg",
            adAlt: "testimonio 3 de experiencia y avances en el ootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances5.jpg",
            adAlt: "testimonio 4 de experiencia y avances en el Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances6.jpg",
            adAlt: "testimonio 5 de experiencia y avances en el Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        },
        {
            adImg: "assets/resources/img/images/avances-empresas.jpg",
            adAlt: "Imagen con logos de las empresas que acompañan al desarrollo del Bootcamp Fullstack Js CILSA",
            adLink: "https://www.instagram.com/p/DAG44rfCtHn",
        }
        ]
       )}

        </div>
    </div>

</section>

`;