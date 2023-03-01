"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE = exports.FAHRENHEIT = exports.CELSIUS = exports.Logic = void 0;
class Logic {
    constructor(degreeUnit, baseLogic, offset) {
        this.degreeUnit = degreeUnit;
        this.baseLogic = baseLogic;
        this.offset = offset;
    }
    inOriginalState(value) {
        return (value - this.offset) * this.baseLogic;
    }
    inOtherState(value) {
        return (value * this.baseLogic) + this.offset;
    }
}
exports.Logic = Logic;
exports.CELSIUS = new Logic("C", 5 / 9, 32);
exports.FAHRENHEIT = new Logic("F", 9 / 5, 32);
exports.BASE = new Logic("C", 1, 0);
