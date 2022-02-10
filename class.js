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

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;

    function changeSalary(newSalary) {
        this.salary = newSalary;
    }
}
e = new emp(752, "Praveen", 15000);
console.log(e.id + " " + e.name + " " + e.salary);
let sal =e.salary
e.changeSalary(45000);
console.log(`your salary has been changed from ${sal} to ${e.salary}`);


function Student(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Student.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee=new Student("Praveen","Sree");  

console.log(employee.fullName());