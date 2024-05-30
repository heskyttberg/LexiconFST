class person {
    public string fName;
    public string lName;
    public string gender;
    public int age;

/*
    person (fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.age = 0;
        this.gender = "";
    }

    person (fname, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = "";

    }
*/
    person (fName, lName, gender, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }
   public string getInfo {
        string msg =    "First name: " + this.fName + "\n" +
                        "Last name: " + this.lName + "\n" +
                        "Age: " + age + "\n" +
                        "Gender: " + gender + "\n";
        return msg;
    }

}

//static void main (string[] args) {
    /*
    person p1 = new person("a", "b", 18, "female");
    string info;
    info = p1.getInfo();
    */
    Console.WriteLine("test");
