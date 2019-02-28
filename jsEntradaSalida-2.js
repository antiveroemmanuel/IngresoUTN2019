/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

function Mostrar()
{
    var numero;
    var contadorPares = 0;
    var promedio;
    var acumulador = 0;
    var numeroMax;
    var numeroMin;
    var seguir;
    var flag = 0;
    var contador = 0;



    do{


     numero = parseInt(prompt("Ingrese un numero: "))

     while( numero < 0 || isNaN(numero) ) {

  numero = parseInt(prompt("Error. Ingrese un numero"));

     }

     if (numero % 2 == 1) 
     contadorimpares++;
else {
contadorpares++;

}

if(numero < minimo || flag == 0){}

minimo = numerofalg = 1 }

contador++;

         seguir = confirm ("Quiere continuar?: ");
    }while (seguir);

    promedio = acumulador / contador

    document.write("a)la cantidad de numeros pares : "  + contadorpares + "<br>"
    document.write("a)la cantidad de numeros impares : "  + contadorimpares + "<br>"
    document.write("b)el promedio de todos los numeros ingresados : "  + promedio + "<br>"
    document.write("c)la cantidad de numeros pares : " 
    document.write("d)numero maximo: "  + maximo + "<br>"
    document.write("d)numero minimo  : " + minimo + "<br>" 
  










    


















}
//FIN DE LA FUNCION
