"strict mode";
// Script Principal, navegador
// Verificamos si el navegador admite Service Worker
if (navigator.serviceWorker) {
    // Registramos el archivo que nos servirá de Service Worker
    navigator.serviceWorker.register("nombreServiceWorker.js");
};
// Para enviarle un mensaje al Service Worker necesitamos saber si esta listo con el metodo ready el cual devuelve una promesa, el cual tiene una propiedad llamada active que contiene el metodo postMessage.
navigator.serviceWorker.ready.then(
    res => res.active.postMessage("Saludando al Service Worker.")
);
// Para que el navegador escuche los mensajes del Service Worker
navigator.serviceWorker.addEventListener("message", e=>{
    console.log("Mensaje recibido del Service Worker:");
    console.log(e.data);
});

////////////////////////////////////////////////////////
// Service Worker (nombreServiceWorker.js)
// Para señalar el Service Worker se utiliza self algo como el this
self.addEventListener("install", e=>{
    console.log("Service Worker instalado.");
});

self.addEventListener("activate", ()=>{
    console.log("Service Worker está activo.");
});

self.addEventListener("fetch", ()=>{
    console.log("Service Worker interceptando peticion.");
});

self.addEventListener("message", e=>{
    console.log("Mensaje recibido del navegador:");
    console.log(e.data);
    // Para enviar un mensaje desde el Service Worker, accedemos al metodo source
    e.source.postMessage("Saludando al navegador.")
});