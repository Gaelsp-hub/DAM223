
console.log("Hola Mundo Node ")

let edad1= 20;
let edad2= 18;

console.log("Edad Promedio:");
console.log((edad1 + edad2) / 2);

console.log("Medidor de procesos:");

console.time('miProceso');
for(let i=0; i<1000000000; i++){

}
console.timeEnd('miProceso');

