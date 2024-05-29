class person{
    fName;
    lName;
    age;
    gender;


    constructor(fName, lName, age, gender){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }

    introduce(){
        let msg = "Hi I'm " + this.fName + " " + this.lName;
        console.log(msg)
    }

    getInfo(){
        let msg = "First name: " + this.fName + "\n" +
                  "Last name: " + this.lName + "\n" +
                  "Age: " + this.age + "\n" +
                  "Gender: " + this.gender + "\n";
                  
        console.log(msg)
    }
}

let p1 = new person("a", "b", 10, "male");
p1.introduce();

let msg = "First name: " + p1.fName;
console.log(msg)
msg = "Last name: " + p1.lName;
console.log(msg);
msg = "Age: " + p1.age;
console.log(msg);
msg = "Gender: " + p1.gender;
console.log(msg);

let p2 = new person("b", "c", 10, "female");
p2.introduce();
p2.getInfo();
p1.getInfo();
p2.getInfo();
