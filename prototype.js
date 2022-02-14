function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "Indian";
  
  const myName = new Person("Praveen", "Sree", 23, "black");
  let txt = "";
  for (let x in myName) {
    txt = myName[x];
    console.log(txt);
  }