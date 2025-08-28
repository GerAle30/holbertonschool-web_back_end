export default function getStudentsIdsSum(students) {
    return students.reduce((acc. students) => acc + students.id, 0);
