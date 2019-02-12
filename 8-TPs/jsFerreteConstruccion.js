/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   //Declaramos variables

   var largo;
   var ancho;
   var alambre;
   var perimetro;

   //Obtener los datos de entrada

   largo = parseFloat(document.getElementById("Largo").value);

   ancho = parseFloat(document.getElementById("Ancho").value);

   perimetro = (largo + ancho) * 2;

   alambre = perimetro * 3;

   //Muestro la Informacion

   alert("La cantidad de alambre es de " + alambre + " mts" );
   
}
function Circulo () 
{

var radio;
var alambre;
var perimetro;

// 2 * 3.1416 * radio

var radio = parseFloat(document.getElementById("Radio").value);

//alambre = (2 * radio * Math.PI) * 3; 
// Math. es la caja para conseguir funciones matematicas

perimetro = 2 * Math.PI * radio;

alambre = perimetro * 3;

alert("La cantidad de alambre es de " + alambre.toFixed(2) + " mts");

	
}
function Materiales () 
{

    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;


    largo = parseFloat(document.getElementById("Largo").value);
 
    ancho = parseFloat(document.getElementById("Ancho").value);

    area = largo * ancho;

    cal = area * 3;

    cemento = area * 2;

    alert("Se necesitan " + cal.toFixed(0) + " bolsas de cal y " + cemento.toFixed(0) + " bolsas de cemento.");

	
}