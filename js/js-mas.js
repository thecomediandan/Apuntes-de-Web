"strict mode";
// El uso de cookies puede ser diver generalmente lleva el formato de clave=valor;atributo;atributo...
// Convertimos cantidad de dias a formato UTC
const newFechaUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime + dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookie = (nombre, dias)=>{
    expires = newFechaUTC(dias);
    document.cookie = `${nombre};expires=${expires}`;
};

crearCookie("usuario=daniel","4");

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1];
        }     
    }
    return "No hay cookies con ese nombre";
}
// Para eliminar una cookie debemos sobreescribir la cookie de las siguientes maneras:
document.cookie = "usuario=daniel;max-age=0";
crearCookie("usuario=daniel;max-age=0","4");