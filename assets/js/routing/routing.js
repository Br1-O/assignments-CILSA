//utils import
import { redirectToPage } from "../utils/redirectToPage.js";
//navBar content
import { navBar } from "../components/navBar.js";
//footer content
import { footer } from "../components/footer.js";
//validations
import { maxLengthValidation, minLengthValidation, emailValidation, nameValidation } from "../validation/utils.js";
//page not found content
import { notFoundMessage } from "../pages/notFound404.js";
import { dinamicRouteDisplay } from "./dinamicRouting.js";
//home page content
import { homeContent } from "../pages/home/MAIN.js";
import { formPage } from "../pages/form/MAIN.js";
import { validationForm } from "../validation/form.js";
import { accesibilityPage } from "../pages/accesibility/MAIN.js";
import { hostingsContent } from "../pages/hostings/MAIN.js";
import { githubSectionContent } from "../pages/github/MAIN.js";

//I'm not implementing this until finishing the project, since local server is unable to redirect all petitions to my index.html without using backend server utilities

// Define your routes and corresponding templates
// const routes = {
//     "/": "<h2>Home</h2><p>Welcome to our website!</p>",
//     "/#trending-now": "<h2>Trending Products</h2><p>This is the trending products section.</p>",
//     "/#contacto": "<h2>Contact Us</h2><p>Feel free to reach out to us!</p>"
//   };
  
  // Function to update content based on current URL
//   const updateContent = () => {
//     const path = window.location.pathname;
//     const content = routes[path] || "<h2>¡ Pagina no encontrada!</h2><p>La página que buscas no existe :(</p>";
//     document.getElementById("page-container").innerHTML = content;
//   }

//provitional hash based routing system until finishing project, then we switch to the routing based on raw URL paths

//Update content based on hash
export const updateContent = async() => {
    //get the url
    const hash = window.location.hash.substring(1); // Remove leading "#"

    //get the section ID from the hash
    const sectionId = window.location.hash.substring(1); // Remove the leading '#'

    //container for page content
    const content = document.getElementById("main");
    //section with the corresponding ID
    const section = document.getElementById(sectionId);


    //■■■■■■■■■■■■■■■■■■■■ hash system routing ■■■■■■■■■■■■■■■■■■■■//

    if (section) {
        //scroll to the section with that id if it exist
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section

    }else{
        // Change page content based on hash
        switch(hash) {

            //home page
            case '':

                //update title attribute of page
                document.title =  `Trabajos Prácticos · CILSA`;

                //include proper navbar
                navBar();

                //update home content
                content.innerHTML = homeContent;

                //include footer
                footer();

            break;

            //home page
            case 'form':

                //update title attribute of page
                document.title =  `Formulario · CILSA `;

                //include proper navbar
                navBar();

                //update home content
                content.innerHTML = formPage;
                
                //apply validation event on form
                validationForm(maxLengthValidation, minLengthValidation, nameValidation, emailValidation);

                //apply high contrast style
                const btnHighContrast = document.getElementById('bntHighContrast');

                let currentStyle = "default";
        
                btnHighContrast.addEventListener('click', function(e) {

                    e.preventDefault();

                    if (currentStyle === "default"){
                        document.documentElement.style.setProperty('--main-bg-color', '#000');
                        document.documentElement.style.setProperty('--main-secondary-color', '#FFF');
                        document.documentElement.style.setProperty('--border-color', '#FFF');
                        document.documentElement.style.setProperty('--font-color', '#FFF');
                        document.documentElement.style.setProperty('--error-color', '#FFFF00');
                        document.documentElement.style.setProperty('--input-bg-color', '#000');

                        currentStyle = "high contrast"
                        btnHighContrast.textContent = "Reestablecer estilo";
                    }else{
                        document.documentElement.style.setProperty('--main-bg-color', 'rgb(0, 153, 255)');
                        document.documentElement.style.setProperty('--main-secondary-color', '#FFF');
                        document.documentElement.style.setProperty('--border-color', '#FFF');
                        document.documentElement.style.setProperty('--font-color', 'rgb(3, 38, 142)');
                        document.documentElement.style.setProperty('--error-color', 'rgb(201, 23, 23)');
                        document.documentElement.style.setProperty('--input-bg-color', '#FFF');

                        currentStyle = "default"
                        btnHighContrast.textContent = "Estilo de Alto Contraste";
                    }
                });

                //include footer
                // footer();

            break;

            //home page
            case 'accesibility':

                //update title attribute of page
                document.title =  `Accesibilidad · CILSA`;

                //include proper navbar
                navBar();

                //update home content
                content.innerHTML = accesibilityPage;

                //include footer
                footer();

            break;

            //home page
            case 'hostings':

                //update title attribute of page
                document.title =  `Hostings · CILSA`;

                //include proper navbar
                navBar();

                //update home content
                content.innerHTML = hostingsContent;

                //include footer
                footer();

            break;

            //home page
            case 'github':

                //update title attribute of page
                document.title =  `Github · CILSA`;

                //include proper navbar
                navBar();

                //update home content
                content.innerHTML = githubSectionContent;

                //include footer
                footer();

            break;

            //dinamic routes and not found page
            default:

                //■■■■■■■■■■■■■■■■■■■■ Product page dinamic URL rendering ■■■■■■■■■■■■■■■■■■■■//

                // Dynamic URL matching with regular expression

                    // const tiendaProductoPattern = /^tienda\/producto\/([^\/]+)\/([^\/]+)$/;

                //URL has to be in the form: tienda/producto/category/name-of-product

                // Check if pattern for dinamic route of product's page is match (w/ injected dependencies into productRouteHandler)

                    // const singleProductPageRouteHandler = await dinamicRouteDisplay(hash, tiendaProductoPattern, async (routeParams) => {
                    //     await productRouteHandler(
                    //         routeParams,
                    //         findProductByCategoryAndName,
                    //         userData,
                    //         redirectToPage,
                    //         setUserDataFromSessionData,
                    //         notFoundMessage,
                    //         displaySingleProductPage
                    //     );
                    // });

                //■■■■■■■■■■■■■■■■■■■■ if dinamic routes are not matched display not found page ■■■■■■■■■■■■■■■■■■■■//

                    //update title attribute of page
                    document.title =  `CILSA · Not Found 404`;

                    //display not found default page
                    content.innerHTML = notFoundMessage;
                    redirectToPage("", 3000);


                //include proper navbar
                navBar(userData.isSessionSet);
                //include footer
                footer();
                
            break;
        }

        // Scroll to the top of the page once content is changed
        window.scrollTo({ top: 0});

        //init Animation on Scroll library
        AOS.init();
    }
}

//handle popstate event (back/forward navigation)
window.addEventListener("popstate", updateContent);

//update content when the page loads or hash changes
window.addEventListener('hashchange', updateContent);

//update content when the page loads or hash changes
document.addEventListener("DOMContentLoaded", () => {

    //update title attribute of loading page
    document.title =  ` · Loading...`;

    const loadingScreen = document.getElementById("loading-overlay");
    const body = document.querySelector("body");

    //display loading screen on DOM loading start
    loadingScreen.classList.add("flex");
    body.style.overflowY = "hidden";

    window.onload = () => {
        
        //display content when the window if fully loaded
        loadingScreen.classList.remove("flex");
        loadingScreen.classList.add("d-none");
        body.style.overflowY = "scroll";

        //update content based on the URL
        updateContent();
    }
});