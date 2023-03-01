import { BASE, FAHRENHEIT } from "../classes/logic";
import { Unit } from "../classes/unit";

describe("Celsius", () => {
  test("0 C should be 0 in celsius ", () => {
    expect(new Unit(0, BASE).getTemperature(BASE)).toBe(0);
  });

  test("40 C should be 104 in Fahrenheit", () => {
    expect(new Unit(40, BASE).getTemperature(FAHRENHEIT)).toBe(104);
  });

  test("-40 C should be 0 -40 in Fahrenheit", () => {
    expect(new Unit(-40, BASE).getTemperature(FAHRENHEIT)).toBe(-40);
  });
});
