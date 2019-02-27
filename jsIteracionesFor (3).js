function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while(isNaN(repeticiones)){ 

    repeticiones = parseInt(prompt("Eso no es un numero. Ingrese el numero de repeticiones"));
}

for ( cantidad = 0   ;  cantidad < repeticiones    ; cantidad++   )


console.log("Hola UTNFRA");


}//FIN DE LA FUNCIÓN