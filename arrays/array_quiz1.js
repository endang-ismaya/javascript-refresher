let students = [
    [1, "Vincent", 3.5],
    [2, "Udin", 3.0],
    [3, "Mamang", 2.1],
];

// grade pass min 3.0

/*
Result:
1. Vincent, IPK = 3.5, Lulus
2. Udin, IPK = 3.0, Lulus
3. Mamang, IPK = 2.1, Gagal
*/

for (let i = 0; i < students.length; i++) {
    grade = students[i][2];
    status_grade = grade >= 3.0 ? "Lulus" : "Gagal";
    console.log(
        `${students[i][0]}. ${students[i][1]}, IPK = ${students[i][2]}, ${status_grade}`
    );
}
