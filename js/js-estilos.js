
const checkBox = document.querySelector(".cb");
const botonInicio =document.querySelector(".nav-button-inicio");
const botonHTML =document.querySelector(".nav-button-html");
const botonCSS =document.querySelector(".nav-button-css");
const botonJS =document.querySelector(".nav-button-js");
const botonNosotros =document.querySelector(".nav-button-end .nav-button");
const lan = document.querySelector(".btn-idioma");
const vtnLan = document.querySelector(".window-language");
const vtnLanMenu = document.querySelector(".window-language .menu-language");

// Para establecer la página hacía arriba cada vez que se cargue.
// Forma 1:
// window.onload = function() {
//     window.scrollTo(0, 0);
// }
// Forma 2:
document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
});

// Eventos de funciones de los botones del NAV
//botonInicio.addEventListener('click', function(){
//    window.scrollTo({
//        top: 0,
//        behavior: "smooth"
//    });
//});
botonInicio.addEventListener('click', function(){
    window.location.href="./../index.html";
});
botonHTML.addEventListener('click', function(){
    window.location.href="./../content/pag-html.html";
});
botonCSS.addEventListener('click', function(){
    window.location.href="./../content/pag-estilos.html";
});
botonJS.addEventListener('click', function(){
    window.location.href="./../content/pag-javascript.html";
});
botonNosotros.addEventListener('click', function(){
    const seccionNosotros = document.getElementById("sobre-nosotros");
    seccionNosotros.scrollIntoView({
        behavior: "smooth",
    });
    
});

// Evento del botón de Idioma
function lanClickeado(){
    vtnLan.setAttribute('style', 'display: flex');
}
lan.addEventListener('click', lanClickeado);

var flagWindowLanguage = false;
function ocultarWindowLan(){
    vtnLan.setAttribute('style', 'display: none');
}
vtnLanMenu.addEventListener('mouseout', function(){
    flagWindowLanguage = true;
});
vtnLanMenu.addEventListener('mouseover', function(){
    flagWindowLanguage = false;
});
vtnLan.addEventListener('click', function(){
    if (flagWindowLanguage) {
        ocultarWindowLan();
    };
});

// Eventos de el tema oscuro
function checkBoxClickeado(){
    const linksSeccion = document.querySelectorAll("section a");
    const tituloSwitch = document.querySelector(".title-switch");
    const logo = document.querySelector("h1");
    const botonesNav = document.querySelectorAll(".nav-button");
    const seccion = document.querySelectorAll("section");
    const articulo = document.querySelector("article");
    const subtitulo = document.querySelectorAll("h3");
    const cabecera = document.querySelector("header");
    console.log(linksSeccion);
    if (checkBox.checked) {
        console.log("Check activado");
        tituloSwitch.setAttribute('style', 'text-shadow: 0 0 0 var(--color-blanco)');
        logo.setAttribute('style', 'text-shadow: 0 0 0 var(--color-blanco)');
        articulo.setAttribute('style', 'color : var(--color-blanco)');
        cabecera.setAttribute('style', 'box-shadow : 0 0 0 0 var(--color-blanco)');
        linksSeccion.forEach(element => {
            element.setAttribute('style', 'color : var(--color-secundario)');
        });    
        botonesNav.forEach(element => {
            element.setAttribute('style', 'text-shadow: 0 0 0 var(--color-blanco)');
        });     
        seccion.forEach(element => {
            element.setAttribute('style', 'background-color : var(--color-darkmode)');
        });
        subtitulo.forEach(element => {
            element.setAttribute('style', 'color : var(--color-secundario)');
        });        
    }else{
        console.log("Check desactivado");
        tituloSwitch.setAttribute('style', 'text-shadow: 0 0 15px var(--color-secundario)');
        logo.setAttribute('style', 'text-shadow: 0 0 15px var(--color-secundario)');
        articulo.setAttribute('style', 'color : var(--color-negro)');
        cabecera.setAttribute('style', 'box-shadow : 0 0 40px 1px var(--color-blanco)');
        linksSeccion.forEach(element => {
            element.setAttribute('style', 'color : var(--color-primario)');
        });    
        botonesNav.forEach(element => {
            element.setAttribute('style', 'text-shadow: 0 0 15px var(--color-secundario)');
        });   
        seccion.forEach(element => {
            element.setAttribute('style', 'background-color : var(--color-blanco)');
        });
        subtitulo.forEach(element => {
            element.setAttribute('style', 'color : var(--color-primario)');
        });       
    }
}

checkBox.addEventListener('change', checkBoxClickeado);

// Funcionalidades del carrusel de articulos relacionados

function App(){}
window.onload = function(event){
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function(event){
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    track.style.left == "0px" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)*-1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
}

let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}

//Funcionalidade del carrusel de proyectos realizados

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// Escucha del Scroll
// Cuando estamos en el móvil debemos detectar que se ha movido el scroll
// uns determinada distancia para poder ponerle un color de fondo y se note
window.addEventListener('scroll', function() {
    var navMenuLogo = document.querySelector(".nav-menu-logo");
    if (window.matchMedia("(max-width: 850px)").matches) {
        if (document.documentElement.scrollTop >= 100) {
            navMenuLogo.setAttribute("style", "background: linear-gradient( var(--color-primario),var(--color-negro));")
        }else{
            navMenuLogo.setAttribute("style", "background: transparent;")
        }
        if (document.documentElement.scrollTop >= 800) {
            document.querySelector('.boton-arriba')
            .setAttribute('style', 'display: block;');
        }else{
            document.querySelector('.boton-arriba')
            .setAttribute('style', 'display: none;');
        }
    }
});

// La resolución ha cambiado
window.addEventListener('resize', function() {
  // La resolución de la pantalla ha cambiado
  // debemos resetear el color de nav-logo por los cambios realizado en resoluciones
  // de móviles y para mostrar o no las opciones de barras
    var navMenuLogo = document.querySelector(".nav-menu-logo");
    var navBars = document.querySelector(".fa-bars");
    if (window.matchMedia("(max-width: 850px)").matches) {
        navMenuLogo.setAttribute("style", "background: transparent;")
        navBars.setAttribute("style", "display: block;");
        document.querySelector('.menu').setAttribute('style', 'display: none;');
    }else{
        navMenuLogo.setAttribute("style", "background: linear-gradient( var(--color-primario),var(--color-negro));")
        navBars.setAttribute("style", "display: none;");
        document.querySelector('.menu').setAttribute('style', 'display: block;');
    }
});

// Menu navegacion movil
var iconBars = document.querySelector('.fa-bars');

iconBars.addEventListener('click', ()=>{
    document.querySelector('.cerrar-navegacion-movil')
    .setAttribute('style', 'display: block;');
    document.querySelector('.menu')
    .setAttribute('style', 'display: block;');
});

// Cerrar menu navegacion movil
var divCerrarMovil = document.querySelector('.cerrar-navegacion-movil');

divCerrarMovil.addEventListener('click', ()=>{
    document.querySelector('.cerrar-navegacion-movil')
    .setAttribute('style', 'display: none;');
    document.querySelector('.menu')
    .setAttribute('style', 'display: none;');
});

var listItemMenu = document.querySelectorAll('.list li');

listItemMenu.forEach(element => {
    element.addEventListener('click', ()=>{
        if (window.matchMedia("(max-width: 850px)").matches) {
            document.querySelector('.cerrar-navegacion-movil')
            .setAttribute('style', 'display: none;');
            document.querySelector('.menu')
            .setAttribute('style', 'display: none;');
        }
    })
});

// Anular el darkmode del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
  