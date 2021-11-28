var dato1 = 1;
var dato2 = 0;
var resultado = 0;
const POSICION = 20

for (i = 0; i < 20; i++)

{
    resultado = dato1 + dato2;
    dato1 = dato2
    dato2 = resultado;
        
}

console.log("el numero de fibonacci para la posicion", POSICION, "es", resultado);

