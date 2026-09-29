const listaDeEstudantes = ["João","Juliana","Ana","Caio","Lara","Marjore","Guilherme","Aline","Fabiana","André", "Carlos", "Paulo","Bia","Vivian","Isabela","Vinícius","Renan","Renata","Daisy","Camilo"];
 
const sala1 = listaDeEstudantes.slice(0, listaDeEstudantes.length / 2);
const sala2 = listaDeEstudantes.slice(listaDeEstudantes.length / 2);

console.log(sala1);
console.log(sala2);
console.log(sala1.length + " e " + listaDeEstudantes.length);
