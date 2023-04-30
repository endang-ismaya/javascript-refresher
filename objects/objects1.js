let student = {
    name: "Endang",
    gpa: 3.21,
    isGraduated: true,
};

console.log(student.name);
console.log(student.gpa);
console.log(student.isGraduated);

let person = {
    name: "Caca",
    weight: 45,
    height: 155,
    hobby: ["watching movie", "eating"],
    getHobby: function () {
        console.log("Caca's hobby:");
        for (let i = 0; i < this.hobby.length; i++) {
            console.log(i + 1 + ". " + this.hobby[i]);
        }
    },
};

person.getHobby();
