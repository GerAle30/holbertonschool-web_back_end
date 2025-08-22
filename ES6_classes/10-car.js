export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car - creates new instance of the same class
  cloneCar() {
    // Use this.constructor to ensure we create an instance of the correct class
    // This works for both Car and any subclass that extends Car
    return new this.constructor();
  }
}
