import { subtitle } from "../../components/text/titles.js";
import { accordion } from "../../components/dataDisplayers/accordion.js";

export const hostingsContent = `

<section class="row position-relative d-flex flex-column justify-content-center align-items-center p-3 gap-3 w-100">

    <div class="p-5" style="min-height: 100vh;">
        ${subtitle({text: "Analisis de Hostings", textColor: "var(--font-color)", indexOfHighlightWord: 2, highlightColor: "var(--font-secondary-color)"})}

        <div class="d-flex flex-row justify-content-center align-items-center">
        ${accordion(
            "accordionAccesibility",
            [
                {
                    title: "Hostinger",
                    text: [
                        "No ofrece un plan que sea gratuito.",
                        "Depende de una empresa de Lituania.",
                        "La moneda de pago por defecto son los dólares (USD).",
                        "Entre los servicios que ofrecen están: Hosting compartido, hosting en la nube, VPS, y dominios.",
                        "El plan básico incluye 1 sitio web, 50 GB de almacenamiento SSD, certificado SSL gratuito, ancho de banda de 100 GB.",
                        "La forma de contratación es: mensual desde $9.99, y anual desde $2.99/mes con contrato a largo plazo. (de 48 meses)"
                    ]
                },
                {
                    title: "BlueHost",
                    text: [
                        "No ofrece un plan que sea gratuito.",
                        "Depende de una empresa de EEUU.",
                        "La moneda de pago por defecto son los dólares (USD).",
                        "Entre los servicios que ofrecen están: Hosting compartido, hosting WordPress, VPS, y dominios.",
                        "El plan básico incluye 1 sitio web, 50 GB de almacenamiento SSD, certificado SSL y dominio gratuito por un año.",
                        "La forma de contratación es: mensual desde $10.99, y anual desde $2.95/mes con contrato a largo plazo. (de 36 meses)"
                    ]
                },
                {
                    title: "DonWeb",
                    text: [
                        "No ofrece un plan que sea gratuito, pero tiene opciones bastante accesibles.",
                        "Depende de una empresa de Argentina.",
                        "La moneda de pago por defecto son los pesos.",
                        "Entre los servicios que ofrecen están: Hosting compartido, servidores dedicados, y VPS.",
                        "El plan básico incluye hosting ilimitado (en espacio y tráfico), 1 dominio gratis, cuentas de email, y certificado SSL.",
                        "La forma de contratación es: mensual desde $1,990 /mes., y anual desde $1,490 /mes."
                    ]
                },
                {
                    title: "Analisis de DonWeb",
                    text: [
                        "Ofrecen Hosting compartido con espacio y tráfico ilimitado, correo electrónico corporativo, certificado SSL, y dominio gratis. También ofrecen VPS y servidores dedicados para proyectos más grandes.",
                        "Su plan mensual básico cuesta $1,990 ARS, pero si se contrata de manera anual, el precio baja hasta $1,490 ARS/mes.",
                        "Su servicio es ideal para proyectos que buscan el uso de la moneda local y precios accesibles. En particular sería útil para tiendas online, ya que proporciona prestaciones robustas, como almacenamiento ilimitado y certificados SSL que aseguran la seguridad del emprendimiento.",
                        "En comparación, Hostinger y Bluehost tienen servicios y precios similares, pero DonWeb puede resultar una opción más económica para personas en Argentina, además de facilitar el pago usando moneda local. Además, DonWeb ofrece almacenamiento ilimitado desde su plan más básico, lo que lo hace ideal para proyectos que requieren flexibilidad, como una tienda online o una aplicación con base de datos en expansión continua."
                    ]
                }
            ]
        )}
        </div>
    </div>

</section>
`;