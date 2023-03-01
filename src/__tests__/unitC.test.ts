import { BASE, FAHRENHEIT } from "../classes/logic";
import { UnitC } from "../classes/unitC";

describe("Celsius", () => {
    test("0 C should be 0 in celsius ", () => {
        expect(new UnitC(0, BASE).getCelsius(BASE)).toBe(0);
    })

    test("40 C should be 104 in Fahrenheit", () => {
        expect(new UnitC(40, BASE).getCelsius(FAHRENHEIT)).toBe(104);
    })

    test("-40 C should be 0 -40 in Fahrenheit", () => {
        expect(new UnitC(-40, BASE).getCelsius(FAHRENHEIT)).toBe(-40);
    })
});
