"strict mode";
// En esta varible IDBRequest alojamos la solucitud de apertura
// indexedDB.open("nameDatabase", 1) abrimos la db asignando el nombre y su version
// En caso de no encontrar la base de datos la creará
const idbRequest = indexedDB.open("nameDatabase", 1);
// Esto detecta si no se ha creado la db y necesita crearse de nuevo
// y lo hace, al hacerlo podemos crear los almacenes de objetos
idbRequest.addEventListener("upgradeneeded", ()=>{
    console.log("Se actualizó la base de datos");
    // Obtenenmos la base de datos
    const db = idbRequest.result;
    // Creamos el almacen de objetos para que se vaya llenando
    // automaticamente con una clave autoincrementable
    // esta puede ser otra con keypath(investigar)
    db.createObjectStore("nombres",{
        autoIncrement: true
    });
});
// verifica si la apertura fue satisfactoria al abrir la base de datos
idbRequest.addEventListener("success", ()=>{
    console.log("No hubo problemas al abrir la base de datos");
});
// Verfica errores en la apertura
idbRequest.addEventListener("error", ()=>{
    console.log("Hubo un error al abrir la base de datos");
});

// Ejemplo de con que haríamos un CRUD
const agregarObjeto = objeto => {
    const db = idbRequest.result;
    // Necesitamos permisos de transaccion en el almacen de objetos
    // introducimos nombre del almacen y el tipo de transaccion
    const idbTransaction = db.transaction("nombres", "readwrite");
    // Identificamos el almacen de objetos con los permisos de transaccion
    const almacenObjetos = idbTransaction.objectStore("nombres");
    // Agregamos un objeto
    almacenObjetos.add(objeto);
    // Evento para saber si se ha completado la transaccion
    idbTransaction.addEventListener("complete", ()=>{
        console.log("Objeto agregado correctamente.");
    })
}

const leerObjetos = ()=> {
    const db = idbRequest.result;
    const idbTransaction = db.transaction("nombres", "readonly");
    const almacenObjetos = idbTransaction.objectStore("nombres");
    // Habilitamos un puntero en el almacen de objetos
    const puntero = almacenObjetos.openCursor();
    // Si no hay problemas con el puntero el evento success lo detecta
    puntero.addEventListener("success", ()=>{
        // hasta que el puntero sea nulo iterara gracias al metodo continue y
        // el evento success
        if (puntero.result) {
            console.log(puntero.result.value);
            // El metodo continue permite con la lectura de los
            // demas elementos moviendo el cursor al siguiente
            puntero.result.continue();
        } else console.log("Se terminó de leer los datos.");
    })
}

const modificarObjeto = (objeto, clave) => {
    const db = idbRequest.result;
    const idbTransaction = db.transaction("nombres", "readwrite");
    const almacenObjetos = idbTransaction.objectStore("nombres");
    // En caso que put no encuentre el objeto lo crea
    almacenObjetos.put(objeto, clave);
    idbTransaction.addEventListener("complete", ()=>{
        console.log("Objeto modificado/agregado correctamente.");
    })
}

const eliminarObjeto = clave => {
    const db = idbRequest.result;
    const idbTransaction = db.transaction("nombres", "readwrite");
    const almacenObjetos = idbTransaction.objectStore("nombres");
    almacenObjetos.delete(clave);
    idbTransaction.addEventListener("complete", ()=>{
        console.log("Objeto eliminado correctamente.");
    })
}
