const students = [
    { name: "Alice", grade: 7 },
    { name: "Bob", grade: 5 },
    { name: "Charlie", grade: 6 },
    { name: "David", grade: 8 },
    { name: "Eve", grade: 4 },
];

function filterStudentsWithHighGrades(studentArray) {
    return studentArray.filter(student => student.grade >= 6);
}


const highScoringStudents = filterStudentsWithHighGrades(students);


console.log(highScoringStudents);