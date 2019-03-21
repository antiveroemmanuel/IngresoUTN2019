/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de rojos 
b) La cantidad de rojos con precio mayor a 5000 
c) La cantidad de vehiculos con precio inferior a 5000 
d) El promedio de todos los vehiculos ingresados.	
e) El mas caro y su color*/

function mostrar()
{

var color;
var valor;
var seguir;
var contadorRojos;
var cantidadVehiculos;
var promedio;
var masCaro;
var colorMascaro;

do {
    
    color = prompt("Ingrese el color rojo, verde o amarillo: ");

    while(!(color == rojo || color == verde || color == amarillo ));

    color = prompt("Error. Vuelva a ingresar el color rojo, verde o amarillo: ");


    valor = prompt("Ingrese un valor entre 0 y 1000: ");

    while(!( valor <= 10000 && valor >= 0))


    valor = prompt("Error . Ingrese un valor entre 0 y 1000: ");





    seguir = confirm("Desea continuar?: ");
} while (seguir);



}
