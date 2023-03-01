import { Logic } from "./logic";

export class UnitC {
    private readonly value: number;
    private readonly logic: Logic;
    private readonly baseValue: number;

    constructor(value: number, logic: Logic) {
        this.value = value;
        this.logic = logic;
        this.baseValue = logic.inOriginalState(this.value);
    }

    getCelsius(shift: Logic): number {
        return shift.inOtherState(this.baseValue);
    }
} 