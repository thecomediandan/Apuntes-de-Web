"strict mode";
// INTERSECTION OBSERVER nos detecta si un elemento es visible
// o no en el Viewport
// Seleccionamos diversos elementos para esta prueba
const elementos = document.querySelectorAll(".classNameElements");
// Funcion que se llamara a si misma en el observador
const verificacionVisibilidad = (entradas) => {
    for (const entrada of entradas) {
        if (entrada.isIntersecting) {
            console.log("Se esta viendo el elemento.");
        }
    }
}
// Opciones del observador
const opciones = {
    root: "viewport", // Si no se pone nada por defecto es viewport, pero es la referencia que se toma para observar culaquier elemento
    rootMargin: "30px 30px 30px 30px", // margin del root en este caso viewport, modifica el área de referencia del obnservador
    treshold: 0.5 // Cuanto debería ocupar el elemento, 0=ni bien toque el borde, 1=hasta que se muestre por conmpleto
}
// Observador en este caso esta observando diversos elementos
const observador = new IntersectionObserver(verificacionVisibilidad, opciones);
for (const elemento of elementos) {
   observador.observe(elemento); 
}