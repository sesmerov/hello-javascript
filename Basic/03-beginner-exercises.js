/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

    //Comentario de 1 linea

// 2. Escribe un comentario en varias líneas

    /*
    Comentario de varia slineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let edad = 29
let nombre = "Diego"
let isDeveloper = true
let undefinedValue = undefined
let nullValue = null
let mysymbol = Symbol('mysymbol')
let bigIntValue = 1234567890123456789012345678901234567890n

// 4. Imprime por consola el valor de todas las variables

console.log(edad)
console.log(nombre)
console.log(isDeveloper)
console.log(undefinedValue)
console.log(nullValue)
console.log(mysymbol)
console.log(bigIntValue)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof edad)
console.log(typeof nombre)
console.log(typeof isDeveloper)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mysymbol)
console.log(typeof bigIntValue)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

edad = 10
nombre = "Paco"
isDeveloper = false
undefinedValue = undefined
nullValue = null
mysymbol = Symbol("mysimbol2")
bigIntValue = 124234234324535453453412423423434242456234242344324n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

edad = "Paco"
nombre = 32
isDeveloper = undefined
undefinedValue = false
nullValue = 1.34
mysymbol = BigInt(123423454567675675675678568567867867867867)
bigIntValue = Symbol("mySimbol3")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const edad2 = 29
const nombre2 = "Diego"
const isDeveloper2 = true
const undefinedValue2 = undefined
const nullValue2 = null
const mysymbol2 = Symbol('mysymbol')
const bigIntValue2 = 1234567890123456789012345678901234567890n

// 9. A continuación, modifica los valores de las constantes

    // edad2 = 10 Error al modificar el valor de una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

