import { CELSIUS, Logic } from "./logic";

export class Unit {
  private readonly value: number;
  private readonly logic: Logic;
  private readonly baseValue: number;

  constructor(value: number, logic: Logic) {
    this.value = value;
    this.logic = logic;
    this.baseValue = logic.inOriginalState(this.value);
  }

  getTemperature(shift: Logic): number {
    return shift === CELSIUS
      ? this.baseValue
      : shift.inOtherState(this.baseValue);
  }
}
