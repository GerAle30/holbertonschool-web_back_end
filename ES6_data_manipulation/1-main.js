import getListStudentsIds from "./1-get_list_students_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentsIds("hello")); // []
console.log (getListStudentsIds(getListStudents())); // [1, 2, 5]
