export default function updateStudentsGradeByCity(students, city, newGrades) {
    return students
    .filter((students) => students.location === city)
    .map((student) => {
        const gradeObj = newGrades.find((g) => g.studetnId === student.id);
        return {
            ...student,
            grade: gradeObj ? gradeObj.grade : 'N/A',
        };
    });
}
