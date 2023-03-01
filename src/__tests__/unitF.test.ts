import { BASE, CELSIUS, FAHRENHEIT } from "../classes/logic";
import { UnitF } from "../classes/unitF";

describe("Fahrenheit", () => {
    test("0 F should be 0 in Fahrenheit ", () => {
        expect(new UnitF(0, BASE).getFahrenheit(BASE)).toBe(0);
    })

    test("40 F should be 4.44 in Celsius", () => {
        expect(new UnitF(40, BASE).getFahrenheit(CELSIUS)).toBe(4.44);
    })

    test("-40 F should be -40 in Celsius", () => {
        expect(new UnitF(-40, BASE).getFahrenheit(CELSIUS)).toBe(-40);
    })
});
