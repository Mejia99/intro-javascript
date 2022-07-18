// ejercicio 1
var animals= ['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];

document.write(animals.concat(comingSoonAnimals));


// ejercicio 2 
//2.1 Orden de menor a mayor
var arr=[4,6,1,0,8,2,45,11,5,33,50,101];
console.log(arr.sort(function(a,b){return a-b}));

//2.2 agregar un nuevo elemento
arr.push('cow');
console.log(arr.sort(function(a,b){return a-b}));

//2.3  retirar primer elemento
animals.shift();
console.log(animals);

//2.4 Index
console.log("el indice es: " + animals.indexOf('parrot'));