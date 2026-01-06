let students = [
  {rollNumber: 123, name: "punit", mark: "100"},
  {rollNumber: 124, name: "raj", mark: "10"},
  {rollNumber: 125, name: "monu", mark: "56"},
  {rollNumber: 126, name: "raju", mark: "67"},
  {rollNumber: 127, name: "sonu", mark: "78"},
  {rollNumber: 128, name: "ritik", mark: "67"}
];

students.sort((a, b) => Number(b.mark) - Number(a.mark));

let rank = 1;
let prevMark = null;
students.forEach((student, index) => {
  let currentMark = Number(student.mark);
  if (prevMark === null || currentMark < prevMark) {
    rank = index + 1;
  }
  student.rank = rank;
  prevMark = currentMark;
});

console.log(students);
