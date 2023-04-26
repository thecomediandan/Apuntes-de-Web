"strict mode";
// Veficamos si las notificaciones son admitidas por el navegador
if (!('Notification' in window)) {
    console.log("Las notificaciones no estan disponiles en tu navegador.");
}
// Preguntamos si queremos activar las notificaciones al usuario
Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {
        console.log("Las notificaciones han sido activadas.");
        let nota = new Notification("Notificandonte un hola :D");
        console.log(nota);
    }
    if (Notification.permission == "denied") {
        console.log("Las notificaciones han sido denegadas.");
    }
    if (Notification.permission == "default") {
        console.log("Las notificaciones estan configuradas por defecto.");
    }
})