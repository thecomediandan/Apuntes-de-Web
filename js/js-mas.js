"strict mode";
// Las condicionales pueden tratarse en una linea
// gastan menos recursos que los if
// Si hay mas de una linea de operacion van (b1,b2,...,bn)
let edad = 30;
(edad > 18) ? 
// Bloque por verdadero
(
    console.log('AFIRMATIVO'),
    console.log('Es mayor de edad')
):
// Bloque por falso
console.log('NEGATIVO');