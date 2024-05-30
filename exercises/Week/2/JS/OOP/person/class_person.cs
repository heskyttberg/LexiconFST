class person {
    string fName;
    string lName;
    string gender;
    int age;

    constructor (fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.age = 0;
        this.gender = "";
    }

    constructor (fname, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = "";

    }

    constructor (fName, lName, gender, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }

    getInfo {
        string msg =    "First name: " + this.fName + "\n" +
                        "Last name: " + this.lName + "\n" +
                        "Age: " + age + "\n" +
                        "Gender: " + gender + "\n";
        Consoel.WriteLine(msg);
    }

}

person p1 = new person("a", "b", 18, "female");
p1.getInfo();