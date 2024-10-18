import { subtitle } from "../../components/text/titles.js";
import { carrousel } from "../../components/dataDisplayers/carrousel.js";

export const githubSectionContent = `

<section class="row position-relative d-flex flex-column justify-content-center align-items-center p-3 gap-3 w-100">

    <div class="p-5" style="min-height: 100vh;">
        ${subtitle({text: "Repositorio en Github", textColor: "var(--font-color)", indexOfHighlightWord: 2, highlightColor: "var(--font-secondary-color)"})}

        <div class="d-flex flex-row justify-content-center align-items-center">

            ${
                carrousel(
                    "carrousel-github",
                    [
                        {
                            imgs: ["assets/resources/img/images/imagen-pagina.png"],
                            alt: "Imagen de pagina en Github Pages",
                            h: "Pagina en Github Pages",
                            p: "Pagina creada para la entrega de trabajos prácticos para el bootcamp Js de CILSA",
                            links: [
                                {
                                anchorText: "Click aquí para ir a la página",
                                anchorLink: "https://br1-o.github.io/assignments-CILSA"
                                }
                            ]
                        },
                        {
                            imgs: ["assets/resources/img/images/imagen-repositorio.png"],
                            alt: "Imagen del repositorio en Github",
                            h: "Repositorio de Github",
                            p: "Repositorio en Github de la pagina creada para la entrega de trabajos prácticos para el bootcamp Js de CILSA",
                            links: [
                                {
                                anchorText: "Click aquí para ir a la página",
                                anchorLink: "https://github.com/Br1-O/assignments-CILSA"
                                }
                            ]
                        },
                    ]
                )
            }

        </div>
    </div>

</section>
`;