const botonInicio =document.querySelector(".nav-button-inicio");
const botonHTML =document.querySelector(".nav-button-html");
const botonCSS =document.querySelector(".nav-button-css");
const botonJS =document.querySelector(".nav-button-js");

botonInicio.addEventListener('click', function(){
    window.location.href="./../index.html";
});
botonHTML.addEventListener('click', function(){
    window.location.href="./pag-html.html";
});
botonCSS.addEventListener('click', function(){
    window.location.href="./pag-estilos.html";
});
botonJS.addEventListener('click', function(){
    window.location.href="#";
});