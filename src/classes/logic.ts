export class Logic {
  private readonly degreeUnit: string;
  private readonly baseLogic: number;
  private readonly offset: number;

  constructor(degreeUnit: string, baseLogic: number, offset: number) {
    this.degreeUnit = degreeUnit;
    this.baseLogic = baseLogic;
    this.offset = offset;
  }

  inOriginalState(value: number): number {
    return (value - this.offset) * this.baseLogic;
  }

  inOtherState(value: number): number {
    return value * this.baseLogic + this.offset;
  }
}

export const CELSIUS = new Logic("C", 5 / 9, 32);
export const FAHRENHEIT = new Logic("F", 9 / 5, 32);
export const BASE = new Logic("C", 1, 0);
