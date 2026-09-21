let student={
    name:"Amo",
    age:20,
    course:"cs",
    get courses(){
        return this.course
    }
}
console.log(student.courses);

let pupil = new Object();
pupil.name="chris";
pupil.age=5;
console.log(pupil.name);


function stud(nam,age,course){
    this.nam=nam;
    this.age=age;
    this.course=course;
}
let stude = new stud("anto", 23, "computer science");
console.log(stude.nam);