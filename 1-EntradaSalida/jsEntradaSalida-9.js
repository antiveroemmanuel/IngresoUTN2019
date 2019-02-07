/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;
var aumento;


sueldo = document.getElementById("sueldo").value;

sueldo = parseInt(sueldo);

resultado =  sueldo + (sueldo * 10)/ 100;

aumento = (sueldo*10)/100;

alert(aumento);

document.getElementById("resultado").value = resultado;

//la funcion .tofix limitara los decimales que querramos en la funcion
	
}
