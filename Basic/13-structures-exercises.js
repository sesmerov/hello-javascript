/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let myArray = ["perro","gato","conejo","gorila","leon"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.push("pajaro")
myArray.unshift("cabra")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2,3)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["libro1","libro2","libro3","libro4","libro5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("libro6")
mySet.add("libro4")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("libro3")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([[1,"enero"],[2,"febrero"],[3,"marzo"],[4,"abril"],[5,"mayo"],[6,"junio"],[7,"julio"],[8,"agosto"],[9,"septiembre"],[10,"octubre"],[11,"noviembre"],[12,"diciembre"]])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(myMap.has(5)) {
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("verano", ["junio", "julio", "agosto"])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = [1,2,3,4,5,6]
console.log(myArray2)
let mySet2 = new Set(myArray2)
console.log(mySet2)
let myMap2 = new Map()
myMap2.set("numeros",mySet2)
console.log(myMap2)