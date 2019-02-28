//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
	(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
	a) el promedio de las notas totales.
	b) la nota más baja.
	c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

function Mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaBaja;
	var contadorVaronesMas5 = 0;
	var acumulador = 0;
var flag = 0;
var sexoNotaBaja;
var cantidad = 3;


	for( var i = 0 ; i < cantidad ; i++){

nota = parseInt(prompt("Ingrese nota: "));

while( nota < 0 || nota > 10 ||  isNaN(nota)){
   nota= parseInt(prompt("Error. Reingrese nota"));
}

   sexo = prompt("Ingrese sexo: ");
	while (sexo != "f" && sexo != "m" ) {
		
		sexo = prompt("Error. Reingfrese sexo: ")
	}


acumulador = acumulador + nota;

if ( sexo == "m"  &&   nota >= 5 ) {

contadorVaronesMas5++;
}

if ( nota < notaBaja || flag == 0 ){

notaBaja = nota;
sexoNotaBaja = sexo;
flag = 1;

}

}

promedio = acumulador / cantidad;

alert("Promedio de las notas: " + promedio.toFixed(2) + "\nVarones con notas mayor: " + contadorVaronesMas5 + "\nNota mas baja: " + notaBaja + "\nSexo nota baja: " + sexoNotaBaja );
}
 //FIN DE LA FUNCION.
