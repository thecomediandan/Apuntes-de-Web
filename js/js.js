let nombre = "Daniel";
let apellido = "Quispe Kuno";
let soy = `Yo soy ${nombre} ${apellido}`;
let id1 = 1;

console.time(`Tiempo ${id1}`);
for (let index = 0; index < 10; index++) {
    console.groupCollapsed("Grupo");
    console.log(nombre);
    console.log(apellido);
    console.groupEnd("Grupo");
    console.timeLog(`Tiempo ${id1}`);
}
console.timeEnd(`Tiempo ${id1}`);
