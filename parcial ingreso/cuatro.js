/*Pedir dos números y mostrar el resultado por alert: 
Si son iguales muestro el cuadrado del número. 
Si el primero es divisible por el segundo, los resto, 
de lo contrario muestro solo el resto de la división y 
si el resto de la división es mayor a 3(tres) informarlo por document.write en vez de alert.*/

function mostrar()
{

    
var numero1;
var numero2;
var resultado;



//pido los datos

numero1 = parseInt(prompt("Ingrese un primer numero: "));

numero2 = parseInt(prompt("Ingrese un segundo numero: "));

//proceso los datos


if (numero1 == numero2) {

resultado = numero1 * numero2;

alert("El cuadrado del numero es " + resultado.toFixed(2));
}

if(  numero1 % numero2 == 0 ) {
    
resultado = numero1 - numero2;

alert( "La resta de los numeros da " + resultado.toFixed(2));

}

else if (numero1%numero2 < 3){  
    
   
alert("El resto de la division es " + numero1%numero2);
}

else {
    
    document.write("El resto es " + numero1%numero2);

}



}












