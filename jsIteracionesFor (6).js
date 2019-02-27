function Mostrar()
{
    var numero;
    var contadorPar = 0;
    
    numero = parseInt(prompt("Ingrese Un numero: "));
    
    while ( isNaN(numero)){
    
    numero = parseInt(prompt("No es un numero. Ingrese Un numero"));
    }
    
    for ( var numeroPar = 1  ; numeroPar <= numero ; numeroPar++ ){
    
        
    if ( numeroPar % 2 == 0) {
    
        contadorPar++;
        
    
    console.log(numeroPar);
    
    
    }
    } alert("Numeros pares encontrados: " + contadorPar);



}//FIN DE LA FUNCIÓN