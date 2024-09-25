/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class Car{
    
    constructor(color, price){
        this.color = color
        this.price = price
    }

    toString(color, price){
        console.log(`El coche es de color ${this.color} y cuesta ${this.price}€`)
    }

    static calcIVA(price){
        return price*0.21
    }
}

// 2. Añade un método a la clase que utilice las propiedades

let coche = new Car("white",20000)

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(coche.color)
console.log(coche.price)
console.log(coche.toString())

// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático
console.log(Car.calcIVA(coche.price))

// 6. Crea una clase que haga uso de herencia

class Electric extends Car{

    #batteryRange

    constructor(color,price,batteryRange){
        super(color,price)
        this.#batteryRange = batteryRange
    }

    get batteryRange(){
        return this.#batteryRange
    }

    set batteryRange(batteryRange){
        this.#batteryRange = batteryRange
    }
}

// 7. Crea una clase que haga uso de getters y setters



// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores


let electrico = new Electric("Tesla",50000, "1000")

electrico.batteryRange = 500

console.log(electrico.batteryRange)


// 10. Sobrescribe un método de una clase que utilice herencia 