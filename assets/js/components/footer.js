const footerContent = `      
<!-- Wavy separator -->
    <svg style="background-color: rgb(255, 255, 255);" width="100%" height="100%" id="svg" viewBox="0 180 1440 150" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
    <!-- Modify last value of viewBox to modify its margin on the Y axis -->
    <path d="M 0,390 L 0,150 C 84.74132600480931,175.79732050841636 169.48265200961862,201.5946410168327 232,188 C 294.5173479903814,174.4053589831673 334.81071796633466,121.41875644108555 401,95 C 467.18928203366534,68.58124355891445 559.2744761250428,68.73033321882514 641,93 C 722.7255238749572,117.26966678117486 794.0913775334938,165.6599106836139 861,164 C 927.9086224665062,162.3400893163861 990.3600137409824,110.63002404671936 1055,105 C 1119.6399862590176,99.36997595328064 1186.4685675025764,139.81999312950876 1251,155 C 1315.5314324974236,170.18000687049124 1377.7657162487117,160.09000343524562 1440,150 L 1440,390 Z" 
    stroke="#9b58da" stroke-width="0px" stroke-opacity="0.5" fill="rgb(0, 153, 255)" fill-opacity="1" 
    class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
    </svg> 

<!-- Footer -->
    <footer id="contact">

        <div class="footer-copyright">
            <p> assignments CILSA © 2024 · All rights reserved · Designed by <a href="https://www.linkedin.com/in/bortuno"> Bruno O. Ortuño </a></p>
        </div>

    </footer>
`

export const footer = (show = true) => {

    let footerSection = document.getElementById("footer-section");

    if (show) {
        footerSection.innerHTML = footerContent;
    }else{
        footerSection.innerHTML = "";
    }
};