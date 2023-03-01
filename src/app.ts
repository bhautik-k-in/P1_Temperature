// Case 1
// interface temperature {
//     getFahrenheit(): number;
//     getCelsius(): number;    
// }



// class Temperature implements Temperature {
//     constructor(private readonly temperature: number) {
//         this.temperature = temperature;
//     }

//     getFahrenheit() {
//         return  (32 + (9 * this.temperature) / 5).toFixed(2)
//     }

//     getCelsius() {
//         return ((this.temperature - 32) * 5/9).toFixed(2)
//     }
// }

// const tempObj = new Temperature(-45);
// console.warn(`Temperature: ${tempObj.getFahrenheit()} F`);
// console.warn(`Temperature: ${tempObj.getCelsius()} C`);


// Case 2

import { BASE, CELSIUS, FAHRENHEIT } from "./classes/logic";
import { UnitC } from "./classes/unitC";
import { UnitF } from "./classes/unitF";

const Celsius = new UnitC(27, BASE);
const resultC = Celsius.getCelsius(FAHRENHEIT);
console.log(`Celsius to Fahrenheit : ${resultC.toFixed(2)} F`);


const Fahrenheit = new UnitF(40, BASE);
const resultF = Fahrenheit.getFahrenheit(CELSIUS);

console.log(`Fahrenheit to Celsius: ${resultF.toFixed(2)} C`);