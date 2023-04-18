// // Este objeto sirve para hacer peticiones para AJAX.
// // buscamos si el navegador permite XMLHttpRequest y si no se supone
// // debería ser el navegador de Internet Explorer de Microssoft.
// let peticion;
// if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
// else peticion = new ActiveXObject("Microsoft.XMLHTTP");

// // readystatechange son los cambios de estados durante el proceso
// // de obtencion y envió  de la información el estado 4 es cuando 
// // los datos ya estan listos para ser utilizados, pero en este caso
// // se ha cambiado por load que automáticamente lo detecta el .readyState = 4.
// // El código de estado pueden ser varios pero los más conocidos son
// // 200 conectado, 404 no encontrado
// peticion.addEventListener("load", ()=>{
//     let respuesta;
//     if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
//     else respuesta = "No se ha encontrado el recurso.";
//     console.log(JSON.parse(respuesta).instagram);
// })
// // el método open recibe el método GET y la dirección del archivo que contiene
// // la  estructura JSON y luego la llamamos.
// peticion.open("POST", "https://reqres.in/api/users");
// peticion,setRequestHeader("Content-type", "application/json;charset=UTF8");
// peticion.send(JSON.stringify({
//     "name": "morpheus",
//     "job": "leader"
// }));
// // Mostramos la estructura de la petición.
// console.log(peticion);