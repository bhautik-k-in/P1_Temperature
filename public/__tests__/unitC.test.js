"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logic_1 = require("../classes/logic");
const unit_1 = require("../classes/unit");
describe("Celsius", () => {
    test("0 C should be 0 in celsius ", () => {
        expect(new unit_1.Unit(0, logic_1.BASE).getTemperature(logic_1.BASE)).toBe(0);
    });
    test("40 C should be 104 in Fahrenheit", () => {
        expect(new unit_1.Unit(40, logic_1.BASE).getTemperature(logic_1.FAHRENHEIT)).toBe(104);
    });
    test("-40 C should be 0 -40 in Fahrenheit", () => {
        expect(new unit_1.Unit(-40, logic_1.BASE).getTemperature(logic_1.FAHRENHEIT)).toBe(-40);
    });
});
