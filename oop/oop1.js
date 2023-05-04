class Student {
    constructor(name, subjects, score) {
        this.name = name;
        this.subjects = subjects;
        this.score = score;
    }

    sayName() {
        console.log(this.name);
    }

    saySubjects() {
        console.log(this.subjects);
    }
}

let john = new Student("John", ["math", "english"], 90);
john.sayName();
john.saySubjects();
