function Mostrar()
{

var sexo = prompt("ingrese f ó m .").value;

sexo = sexo.toLowerCase

while (sexo != "f" && sexo != "m") {
    
var sexo = prompt("Error. Reingrese f o m");

}

document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN