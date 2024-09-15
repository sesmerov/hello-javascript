/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a,b) {
    return a+b
}

console.log(suma(2,3))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numberArray = [1,2,556,23,456,99]
function getBiggerNumber(array){
    let bigger = Number.MIN_VALUE
    for (const number of array) {
        if(number>bigger){
            bigger = number
        }
    }
    return bigger
}

console.log(getBiggerNumber(numberArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function getVowels(string) {
    let vowelNumber = 0
    let vowels = "aeiou"
    for (const char of string) {
        if(vowels.includes(char)){
            vowelNumber++
        }
    }
    return vowelNumber
}

console.log(getVowels("Prueba"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let stringArray = ["Hola", "prueba"]
let stringArrayResult = []
function stringArrayToUpper(stringArray) {
    for (const string of stringArray) {
        stringArrayResult.push(string.toUpperCase())
    }
    return stringArrayResult
}

console.log(stringArrayToUpper(stringArray))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(number) {
    let isPrime = true
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false
            break
        }
    }
    return isPrime
}

console.log(isPrime())


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(array1,array2){
    let resultArray = []

    for (const element of array1) {
        if(array2.includes(element))
            resultArray.push(element)
    }
    return resultArray
}

console.log(commonElements(["hola",1,23,4,"ADIOS"],["HOLA", 23,999,1,"ADIOS"]))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function getEvenSum(numberArray){
    let sum = 0
    for (const number of numberArray) {
        if (number%2 == 0) {
            sum+=number
        }
    }
    return sum
}

console.log(getEvenSum([1,2,3,4,5,6]))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function getSquared(numberArray){
    let resultArray = []
    for (const number of numberArray) {
        resultArray.push(number*number)
    }
    return resultArray
}

console.log(getSquared([2,3,1,0,99,8978]))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertedOrder(string){
    let resultString = ""
    for (let i = string.length-1; i >= 0; i--) {
        resultString += string[i]
    }
    return resultString
}

console.log(invertedOrder("Esto es una prueba"))


// 10. Crea una función que calcule el factorial de un número dado

function factorial(number){
    let result = 1
    if(number == 0 || number == 1){
        return result
    }else{
        for (let i = 2; i <= number; i++) {
            result*=i
        }
        return result
    }
}

console.log(factorial(5))