/*Bienvenidos (SOLO SWITCH). 
Una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento 
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%. 
En cualquier continente, si paga con cheque, se recarga un 15% de impuesto al cheque 
Mostrar por alert el precio sin descuentos/aumentos, el porcentaje de descuento/recargo aplicado y el precio final.*/


function mostrar()
{

    //datos a pedir
var continente;
var cantidadDias = 0;
var modoDepago;
var descuento;
var precioFinal;
var recargo;
var descuento;
var preciototal;
var porcentajeRecargo;


//pido los datos

continente = document.getElementById("selecContinente").value;

modoDepago = document.getElementById("selecPago").value; 

cantidadDias = parseInt(prompt("Ingrese la cantidad de dias: "));

//proceso los datos
switch (continente) {

case "America":

//Si es América tiene un 15% de descuento(*0.85) y si ademas paga por débito se le agrega un 10% mas de descuento(*0.75) 
precioFinal = cantidadDias * 100;

switch (modoDepago) {

    
    case "Débito":
    preciototal = precioFinal * 0.75;

descuento = "25 %";

porcentajeRecargo = "0 %";

break;

case "Cheque": 

recargo = precioFinal * 15 / 100;

preciototal = precioFinal + recargo;

porcentajeRecargo = "15 %";

descuento = "0 %";

break;

default:

    preciototal = precioFinal * 0.85;

    descuento = "15 %";

    porcentajeRecargo = "0 %";

break;
}

case "África" :
case "Oceania":
//Si es África u Oceania tiene un 30% de descuento (*0.70) y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento(*0.55) 
precioFinal = cantidadDias * 100;

switch (modoDepago) {
    

case "MercadoPago":
case "Efectivo":

  preciototal = precioFinal *  0.55;

  descuento = "45 %";

  porcentajeRecargo = "0 %";

  break;

  case "Cheque":

    recargo = precioFinal * 15 / 100;
    
    preciototal = precioFinal + recargo;
    
    porcentajeRecargo = "15 %";

    descuento = "0 %";

    break;
    
default:

    preciototal = precioFinal * 0.70;

    descuento = "30 %";

 
   porcentajeRecargo = "0 %";

   break;
}


case "Europa":

precioFinal = cantidadDias * 100;
//Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 

switch (modoDepago) {
    
case "Débito":

    preciototal = precioFinal * 0.65 ;

    descuento = "35 %";

    porcentajeRecargo = "0 %";
    break;
    
case "MercadoPago":


    preciototal = precioFinal * 0.70;

    descuento = "30 %";
    
    porcentajeRecargo = "0 %";

    break;

case  "Cheque":

        recargo = precioFinal * 15 / 100;
        
        preciototal = precioFinal + recargo;
        
        porcentajeRecargo = "15 %";

        descuento = "0 %";

        break;

 default:
    
    preciototal= precioFinal * 0.75;

    descuento = "25 %";

    porcentajeRecargo = "0 %";

break;
    
}

default:

//cualquier otro continente tiene un recargo del 20% . 
//En cualquier continente, si paga con cheque, se recarga un 15% de impuesto al cheque
switch (modoDepago) {
 
    case "Cheque":

    recargo = precioFinal * 35 / 100;
    
    preciototal = precioFinal + recargo;

    porcentajeRecargo = "35 %";

    descuento = "0 %";
    break;
    
  default:

        recargo = precioFinal * 20 / 100;

        preciototal = precioFinal + recargo;

        porcentajeRecargo = "20 %";

        descuento = "0 %";

    }

break;

}
//muestro la informacion

mensaje = "a) El precio sin descuentos/aumentos es $ " + preciototal + " \nb) El porcentaje de descuento es " + descuento + " y el porcentaje de recargos es " + porcentajeRecargo + "\nc) El precio final con descuentos/recargos es $ " + preciototal;

alert(mensaje);

}
