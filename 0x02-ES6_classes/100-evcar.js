/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // cloneCar - Return cloned version of car (Privacy mode)
  cloneCar() {
    return new Car();
  }
}
