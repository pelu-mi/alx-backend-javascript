export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to return this object using Symbol
  static get [Symbol.species]() {
    return this;
  }

  // cloneCar - Return cloned version of car
  cloneCar() {
    // option 1: Easy way
    // return new this.constructor(this._brand, this._motor, this._color);
    // ...................................................................
    // option 2: Using Symbol
    return new this.constructor[Symbol.species]();
  }
}
