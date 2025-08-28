import getListStudents from "./0-get_list_students.js";
import getStudentsIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentsIdsSum(students);

console.log(value);
