/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert: 
a) El promedio de los kilos totales. 
b) El mas liviano y su sabor 
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/

function mostrar()
{

    //declaro las variables
    var kilos;
    var sabor;
    var cantidad = 3;
    var acumuladorKilos = 0;
    var contadorKilos = 0;
    var promedioKilos;
    var masLiviano;
    var sabormasLiviano;
    var acumuladorsaborCarne = 0;
    var cantidadSAborcarne = 0;
    var promedioKiloscarne;
    var flag = 0;

//pido y proceso los datos

    for(var i=0 ; i < cantidad ; i++) {

kilos = parseInt(prompt("Ingrese la cantidad de kilos entre 0 y 500: "));

while(!(kilos <= 500 && kilos >= 0)){

kilos = parseInt(prompt("Error. Ingrese la cantidad de kilos entre 0 y 500 : "));

acumuladorKilos = acumuladorKilos + kilos;

contadorKilos++;
}
 
sabor = prompt("Ingrese el sabor pollo, carne o vegetales: ");

while(!( sabor == "carne" || sabor == "vegetales" || sabor == "pollo" )){

sabor = prompt("Error. Ingrese el sabor pollo, carne o vegetales: ");}

if(kilos < masLiviano || flag == 0 ){

masLiviano = kilos;
sabormasLiviano = sabor;
flag = 1;
    }

if(sabor == carne){
  
acumuladorsaborCarne = acumuladorsaborCarne + kilos;

cantidadSAborcarne++;
}
}
promedioKiloscarne = acumuladorsaborCarne / cantidadSAborcarne;

promedioKilos = acumuladorKilos / contadorKilos;    

//muestro la informacion
alert("a)El promedio de los kilos totales es " + promedioKilos + "\n b) El mas liviano es " + masLiviano + " y su sabor es " + sabormasLiviano + "\n c) La cantidad sabor carne es de " + cantidadSAborcarne + " y el promedio de kilos sabor carne es " + promedioKiloscarne);

    
}
