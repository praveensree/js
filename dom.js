function heading() {
     const element = document.getElementById("test");
     element.innerHTML = "New Heading";
}
function printvalue() {
     var name = document.sr.name.value;
     alert("Welcome: " + name);
}
function msg() {
     var Q = confirm("Are u sure?");
     if (Q == true) {
          alert("ok");
     }
     else {
          alert("cancel");
     }

}
function notification() {
     let Name = prompt("Your good name");
     alert("Thanks " + Name + "..!");

}
function Git() {
     open("https://github.com/praveensree/js");
}
function interval() {
     setTimeout(
          function () {
               alert("Welcome to Javatpoint after 2 seconds")
          }, 2000);

}
document.writeln("<br/>navigator.appCodeName: "+navigator.appCodeName);  
document.writeln("<br/>navigator.appName: "+navigator.appName);  
document.writeln("<br/>navigator.appVersion: "+navigator.appVersion);  
document.writeln("<br/>navigator.cookieEnabled: "+navigator.cookieEnabled);  
document.writeln("<br/>navigator.language: "+navigator.language);  
document.writeln("<br/>navigator.userAgent: "+navigator.userAgent);  
document.writeln("<br/>navigator.platform: "+navigator.platform);  
document.writeln("<br/>navigator.onLine: "+navigator.onLine);  


document.writeln("<br/>screen.width: "+screen.width);  
document.writeln("<br/>screen.height: "+screen.height);  
document.writeln("<br/>screen.availWidth: "+screen.availWidth);  
document.writeln("<br/>screen.availHeight: "+screen.availHeight);  
document.writeln("<br/>screen.colorDepth: "+screen.colorDepth);  
document.writeln("<br/>screen.pixelDepth: "+screen.pixelDepth);  

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}