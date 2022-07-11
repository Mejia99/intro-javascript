
//Ejercico 2
var numero = (prompt("Ingresa un numero"));
var i=1;
while ( i<=numero){
    if(i % 5 ==0){
       console.log(i); 
    }
    i++;
}

//Ejercicio 3

var numero=Number(prompt("Ingresa un Numero:"));
var i=1;
    
do {
    if (i % 5 == 0) 
        console.log(i);
    i++;
} while (i<=numero);

//Ejercicio 4

for (var i = 1; i < 50; i=i+2) { 
    document.write(i + "<br>"); 
} 

//Ejercicio 5
var inicio=(prompt("Primer numero a excluir"));
var fin=(prompt("Ultimo numero a excluir:"));
var contador= 0;

for(var i=1; i<=100; i++){
    if (i>=inicio && i<=fin){
    contador++;
        if (contador<=10){
            continue;
        }
    }
        console.log(i);
}