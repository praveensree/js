class companyName  
{  
  constructor()  
  {  
    this.company="Bhavna";  
  }  
}  
class employeeDetail extends companyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new employeeDetail(752,"Praveen");
console.log(`Company: ${emp.company}`)
console.log(`Name: ${emp.name}`)
console.log(`Id: ${emp.id}`)