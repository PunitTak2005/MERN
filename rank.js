let students = [
  {rollNumber: 123, name: "punit", mark: "100"},
  {rollNumber: 124, name: "raj", mark: "10"}
];

students.sort((a, b) => Number(b.mark) - Number(a.mark));
students.forEach((student, index) => {
  student.rank = index + 1;
});

console.log(students);
