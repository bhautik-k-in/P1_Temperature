import { Logic } from "./logic";

export class UnitF {
    private readonly value: number;
    private readonly logic: Logic;
    private readonly baseValue: number;

    constructor(value: number, logic: Logic) {
        this.value = value;
        this.logic = logic;
        this.baseValue = logic.inOtherState(this.value);
    }

    getFahrenheit(shift: Logic): number {
        return +(shift.inOriginalState(this.baseValue)).toFixed(2);
    }
} 