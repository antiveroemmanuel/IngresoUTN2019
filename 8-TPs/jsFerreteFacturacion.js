/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioFinal;

 precio1 = document.getElementById("PrecioUno").value;

 precio1 = parseFloat(precio1);

 precio2 = document.getElementById("PrecioDos").value;

 precio2 = parseFloat(precio2);

 precio3 = parseFloat(document.getElementById("PrecioTres").value);

 precioFinal = precio1 + precio2 + precio3;

 alert("La suma es de $" + precioFinal.toFixed(2));
 


	
}
function Promedio () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);

    precio2 = parseFloat(document.getElementById("PrecioDos").value);

    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es de $" + promedio.toFixed(2));






}
function PrecioFinal () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var iva;
    var PrecioFinal;


    precio1 = parseFloat(document.getElementById("PrecioUno").value);

    precio2 = parseFloat(document.getElementById("PrecioDos").value);

    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    iva = (precio1 + precio2 + precio3) * 21 /100;

    precioFinal = (precio1 + precio2 + precio3 + iva);

    alert("El precio final es de $" + precioFinal.toFixed(2));

    alert("El iva es de $" + iva.toFixed(2));







}