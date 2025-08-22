export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the default string description to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }

  // Override the Symbol.toStringTag to customize console.log output
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
