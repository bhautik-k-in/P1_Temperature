"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const logic_1 = require("./logic");
class Unit {
    constructor(value, logic) {
        this.value = value;
        this.logic = logic;
        this.baseValue = logic.inOriginalState(this.value);
    }
    getTemperature(shift) {
        return shift === logic_1.CELSIUS ? this.baseValue : shift.inOtherState(this.baseValue);
    }
}
exports.Unit = Unit;
