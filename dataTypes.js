//variables
const box = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let add = 0
var x = 1
box.forEach((item) => {
    add += item
    console.log(" addition value" + add)
    x += add
    console.log("x value" + x)
})
console.log("Total x value" + x)
console.log("Total value is: " + add)