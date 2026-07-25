const createStudent = (rollNumber, studentName, branch, cgpa) => {
    let student1 = {rollNumber, studentName, branch, cgpa};
    return student1;
};

function display(newStudents) {
    for (const {rollNumber, studentName, branch, cgpa} of newStudents) {
        console.log(`Roll Number = ${rollNumber}\nStudent Name = ${studentName}\nBranch = ${branch}\nCGPA = ${cgpa}`);
    }
}

// Do not modify the below code
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputLines = [];
rl.on("line", (line) => {
    inputLines.push(line);
});
rl.on("close", () => {
    const numberOfStudents = Number(inputLines[0]);
    let students = [];
    for (let i = 1; i <= numberOfStudents; i++) {
        const [rollNumber, studentName, branch, cgpa] =
            inputLines[i].trim().split(/\s+/);
        students.push({rollNumber, studentName, branch, cgpa});
    }
    const [newRollNumber, newStudentName, newBranch, newCgpa] =
        inputLines[numberOfStudents + 1].trim().split(/\s+/);

    let newStudents = [...students, createStudent(newRollNumber, newStudentName, newBranch, newCgpa)];
    display(newStudents);
});