// Ejercicio 1

var arreglo=[1,4,6,10,22,55,46,2,5,0];
for (var i=0; i<arreglo.length; i++){
    if (arreglo[i]>3){
        console.log(arreglo[i]);
    }     
}


//Ejercicio 2

var arreglo=[];
let contador=0;

while(contador<5){
    arreglo[contador]= contador;
    contador++;
}

for (var i=0;i<5;i++){
    console.log(arreglo[i]);
}

//Ejercicio 3
var arreglo=[1,4,6,10,22,55,46,2,5,0];
let aux=0;

for(var i=0; i<arreglo.length; i++){
    for (var j=i; j<=arreglo.length; j++){
        if (arreglo[i] > arreglo[j]){
            aux= arreglo[i];
            arreglo[i]= arreglo[j];
            arreglo[j]= aux;
        }
    }
}

for(var i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}    

