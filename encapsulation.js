class Student  
  {  
    constructor()  
    {  
       var name;  
       var marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
        if(marks<0||marks>100)  
        {  
          alert("Invalid Marks");  
        }  
      else  
        {  
          this.marks=marks;  
        }  
    }  
    }  
    var stud=new Student();  
     stud.setName("Praveen");  
     stud.setMarks(94); 
    console.log(stud.getName()+" "+stud.getMarks()); 