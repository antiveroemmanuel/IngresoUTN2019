function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag = 0;

	var respuesta='s';



do{ 
		numero = parseInt(prompt("Ingrese un numero"));
		
		while ( isNaN(numero)) { numero = parseInt(prompt("Error no es un numero. Ingrese un numero"));
			
		}

	  if ( numero >= 0 ) {
		  
         positivo += numero;

	  } else {

		flag = 1 
		negativo *= numero;
	}
	contador++;

	respuesta = prompt("Desea continuar?");
	  
	}while( respuesta == 's');

	
	document.getElementById('suma').value = positivo;

if (flag == 0){
	
	negativo = 0}

document.getElementById('producto').value = negativo;


 }//FIN DE LA FUNCIÓN