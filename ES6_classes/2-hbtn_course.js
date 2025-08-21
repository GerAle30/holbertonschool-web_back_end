// 2-hbtn_course.js

export default class HolbertonCourse {
    constructor(name, length, students) {
        // Initial of Validation
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'string') {
            throw new TypeError('Length must be a number');
        }
        if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
            throw new TypeError('students must be an array of strings');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    //Getter y setter for name
    get name() {
        return this._name;
    }


    set name(value) {
        if ( typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Getter a setter for length
    get length () {
        return this._length;
    }

    set length(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = value;
    }

    // Getter setter for students
    get students() {
        return this._students;
    }

    set students(value) {
        if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
        }
        this._students = value;
    }
}
