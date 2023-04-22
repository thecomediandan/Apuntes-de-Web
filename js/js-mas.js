"strict mode";

const validarEdad = (err)=>{
    let edad;
    try {
        if (err) edad = prompt(err);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para tu edad";
        if (edad > 18) console.log("sos mayor de edad");
        else console.log("eres menor de edad");
    } catch (e) {
        validarEdad(e);
    }
}

validarEdad();