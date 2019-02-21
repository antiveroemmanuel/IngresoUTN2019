function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

/*while (!(numero >= 0 && numero <=10)) {
	

	var numero = prompt("Numero incorrecto. Reingrese numero");

}

alert("Numero correcto");*/

while (numero < 0 || numero > 10 || isNaN(numero) ) {

	var numero = parseInt(prompt("Error. Reingrese numero entre 0 y 10"));

	
}

alert("El numero ingresado es " + numero);


}//FIN DE LA FUNCIÓN