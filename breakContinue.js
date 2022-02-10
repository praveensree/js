function prime() {
  let num = "";
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("  ")
      console.log(" 5, so it skipped 5 alone")
      console.log("  ")
      continue;
    }
    num = "The number is " + i;
    console.log(num)
  }
  console.log("  ")

}
function limit() {
  console.log("Only it will execute if the number is leass than 5 ")
  console.log("  ")

  let num = "";
  for (let i = 1; i < 8; i++) {
    if (i === 5) {
      console.log(" 5, so it stopped execution")
      break;
    }
    num = "The number is " + i;
    console.log(num)
  }
}

prime();
limit();