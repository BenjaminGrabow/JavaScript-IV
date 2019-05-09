// PERSON
class Person {
    constructer(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

const thomas = new Person({
    age: '23',
    name: 'Thomas',
    location: 'Berlin',
    gender: 'male'
});
// INSTRUCTOR

class Instructor extends Person {
    constructer(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return 'Today we are learning about {subject}';
    }
    grade(student, subject) {
        return '{student.name} receives a perfect score on {subject}';
    }
}

const gerald = new Instructor({
    age: 45,
    name: 'Gerald',
    location: 'Regensburg',
    gender: 'male',
    specialty: 'Love to play piano',
    favLanguage: 'React',
    catchPhrase: 'Our background and circumstances may have influenced who we are, but we are responsible for who we become.'
});
const berta = new Instructor({
    age: 35,
    name: 'Berta',
    location: 'Dresden',
    gender: 'female',
    specialty: 'writing good code',
    favLanguage: 'Python',
    catchPhrase: 'When you feel like quitting, think about why you started.'
});
// STUDENT

class Student extends Person {
    constructer(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for {subject}`;
    }
    sprintChallenge(subject) {
        return `student.name has begun sprint challenge on {subject}`;
    }
}

const gregor = new Student({
    age: 25,
    name: 'Gregor',
    location: 'Köln',
    gender: 'Male',
    specialty: 'love to play videogames',
    favLanguage: 'Javascript',
    catchPhrase: 'Your future is created by what you do today not tomorrow.',
    previousBackground: 'Economics',
    className: 'WebEu2',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});
const bernd = new Student({
    age: 28,
    name: 'Bernd',
    location: 'Bonn',
    gender: 'Male',
    specialty: 'playing every day chess',
    favLanguage: 'SWIFT',
    catchPhrase: 'Sometimes you win, sometimes you learn.',
    previousBackground: 'Musician',
    className: 'WebEu2',
    favSubjects: ['SWIFT', 'CSS ']
});
const gustav = new Student({
    age: 32,
    name: 'Gustav',
    location: 'München',
    gender: 'Male',
    specialty: 'none',
    favLanguage: 'English',
    catchPhrase: 'The only way to do great work is to love what you do.',
    previousBackground: 'cable worker',
    className: 'WebEu2',
    favSubjects: ['CSS ', 'React ']
})
// PROJECTMANAGER

class ProjectManager extends Instructor {
    constructer(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(name, channel) {
        return `{name} announces to {channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `{ name } debugs { student.name } 's code on {subject}`;
    }
}
const claudia = new ProjectManager({
    age: 29,
    name: 'Claudia',
    location: 'Slubice',
    gender: 'Female',
    specialty: 'loves to cook',
    favLanguage: 'HTML',
    catchPhrase: 'Live a few years of your life like most people wont, so that you can spend the rest of your life like most people cant.',
    gradClassName: 'WebEu1',
    favInstructor: 'Berta'
});
const sabine = new ProjectManager({
    age: 60,
    name: 'Sabine',
    location: 'Paris',
    gender: 'Female',
    specialty: 'loves to play basketball',
    favLanguage: 'HTML',
    catchPhrase: 'If people arent calling you crazy, you arent thinking big enough.',
    gradClassName: 'WebEu1',
    favInstructor: 'Berta'
});

#### Stretch Problem

    * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1 - 100.
        * Now that our students have a grade build out a method on the Instructor(this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade._Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

