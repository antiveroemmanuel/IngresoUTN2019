function Mostrar()
{

	var numero;
	var seguir;
	var acumuladorPos = 0;
	var acumuladorNeg = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
var contadorCeros = 0;
var contadorPares = 0;
var promPos;
var promNeg;
var diferencia;

do{
numero = parseInt(prompt("Ingrese un numero: "));
while (isNaN(numero)) {
numero = parseInt(prompt("Eso no es un numero. Ingrrese un numero: "));

}

if (numero > 0 ){
//positivos

acumuladorPos = acumuladorPos + numero;

contadorPos++;



}else if ( numero == 0){
	//cero

	contadorCeros++;

}else{
// negativo
acumuladorNeg = acumuladorNeg + numero;
contadorNeg++;


}

if(  numero % 2 == 0    )  {

	contadorPares++;
}
seguir = confirm("quiere seguir ingresando?");


}while (seguir);

if ( contadorNeg != 0) {
promNeg = acumuladorNeg / contadorNeg;
}else {

	promNeg = 0;
}

if ( contadorPos != 0){
promPos = acumuladoPos / contadorPos;
}

diferencia = contadorPos - contadorNeg;


document.write("1-Suma de los negativos: " + acumuladorNeg + "<br>")
document.write("2-Suma de los postivios: " + acumuladorPos + "<br>")
document.write("3-Cantidad de los positivos: " + contadorPos + "<br>")
document.write("4-Cantidad de los  negativos: " + contadorNeg+ "<br>")
document.write("5-Cantidad de Ceros: " + contadorCeros + "<br>")
document.write("6-Contador de Pares: " + contadorPares + "<br>")
document.write("7-Promedio de los positivos: " + promPos + "<br>")
document.write("8-Promedio de los negativos: " + promNeg + "<br>")
document.write("9-Diferencias entre positivos y negativos: " + diferencia + "<br>");









}//FIN DE LA FUNCIÓN