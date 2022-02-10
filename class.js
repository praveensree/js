class Employee {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        console.log(this.id + " " + this.name)
    }
}


var e1 = new Employee(752, "Praveen");
var e2 = new Employee(754, "Thota Anudeep");
e1.detail();
e2.detail(); 
