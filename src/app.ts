import { BASE, CELSIUS, FAHRENHEIT } from "./classes/logic";
import { Unit } from "./classes/unit";

const Celsius = new Unit(45, BASE);
const resultC = Celsius.getTemperature(FAHRENHEIT);
console.log(`Celsius to Fahrenheit : ${resultC.toFixed(2)} F`);


const Fahrenheit = new Unit(113, CELSIUS);
const resultF = Fahrenheit.getTemperature(CELSIUS);

console.log(`Fahrenheit to Celsius: ${resultF.toFixed(2)} C`);