class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var b=new B()

b.display();  

var all = [new A(), new B()]
all.forEach(function(res){
    res.display()
})
