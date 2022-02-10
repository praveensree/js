function times(hour) {


  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  }
  else if (hour < 17) {
    greeting = "Good Noon";
  }
  else if (hour < 20) {
    greeting = "Good Evening";
  }
  else {
    greeting = "Good Night";
  }
  console.log(greeting + " The time is " + time)
}
function quote(date) {
  switch (date) {
    case 0:
      console.log(" Sunday")
      break;
    case 1:
      console.log(" Monday")
      break;
    case 2:
      console.log(" Tuesday")
      break;
    case 3:
      console.log(" Wednesday")
      break;
    case 4:
      console.log(" Thursday")
      break;
    case 5:
      console.log(" Friday")
      break;
    case 6:
      console.log(" Saturday")
      break;
  }
}

const time = new Date().getHours();
const dates = new Date().getDay();
times(time);
quote(dates);