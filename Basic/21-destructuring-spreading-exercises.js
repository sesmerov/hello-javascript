/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4]
let [value0, value1] = myArray

console.log(value0, value1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [value3, value4, value5, value6, value7 = 0] = myArray

console.log(value3, value4, value5, value6, value7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    nombre: "Paco",
    apellido: "Perez",
    trabajo: {
        name: "agricultor",
        sueldo: 1200
    }
}

let { nombre, apellido } = person

console.log(nombre, apellido)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { nombre: nombre2, apellido: apellido2 } = person

console.log(nombre2, apellido2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let { trabajo: { name: jobName }, trabajo: { sueldo: jobSalary } } = person

console.log(jobName, jobSalary)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [1, 2, 3]
let myArray3 = ["Paco", "Pepe", "Juan"]

let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// 7. Usa propagación para crear una copia de un array

let myArray5 = [...myArray4]
console.log(myArray5)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let car = {
    color: "white",
    plate: "1234WEF"
}

let carPerson = {...person,...car}

console.log(carPerson)
// 9. Usa propagación para crear una copia de un objeto

let person2 = {...person}

console.log(person2)

// 10. Combina desestructuración y propagación