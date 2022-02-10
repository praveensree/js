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
function msg() {
     setTimeout(
          function () {
               alert("Welcome to Javatpoint after 2 seconds")
          }, 2000);

}