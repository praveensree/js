function project(){const projects = ["GHX", "ConnectWise", "MeridianLink", "TechnologyAdvice", "Elemica"];

let len = projects.length;
let text = "";

for (let i=0; i < len; i++) {
  text = projects[i] ;
  console.log(text);
}
}
function detail(){
const person = {Name:"Praveen", Eid:752, Project:"ConnectWise"}; 

let txt = "";
for (let x in person) {
  txt = person[x] ;
  console.log(txt);
}
}
function marks(){
    const mark =[90,91,96,100,95];
    mark.forEach((i)=>{
       
        console.log(i);
    })

}
function letter(){
let name = "Praveen";

let spelling = "";
for (let x of name) {
  spelling = x ;
  console.log (spelling);
}
}

project();
detail();
marks();
letter();

