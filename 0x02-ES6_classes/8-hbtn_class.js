export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // toString - Default string format
  toString() {
    return this._location;
  }

  // valueOf - Default value
  valueOf() {
    return this._size;
  }
}
