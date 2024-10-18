//default navBar
const defaultNavBar = 
`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="assets/resources/img/images/logo_cilsa_ong.jpg" alt="logo de ONG CILSA">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> Inicio </a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Trabajos praticos
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#form"> TP-1/5 · Formulario </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#accesibility"> TP-2 · Analisis y Accesibilidad Formulario </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#hostings"> TP-3 · Hosting </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#github"> TP-4 · Github </a>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
`

//header tag
const header = document.getElementById('navContainer');

export const navBar = () => {

    //change content of navBar
    header.innerHTML = defaultNavBar;
}

