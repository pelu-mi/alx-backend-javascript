export default class HolbertonCourse {
  constructor(name, length, students) {
    // Initialize name
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    // Initialize length
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    // Initialize students
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
