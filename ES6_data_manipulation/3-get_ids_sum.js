function getstudentsIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getstudentsIdsSum;

export default function getStudentsIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}





