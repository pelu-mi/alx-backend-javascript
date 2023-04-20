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

  // Getter and Setter for name
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }
  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
