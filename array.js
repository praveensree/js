function fruitName(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
fruits.push("Papaya")
fruits.forEach((items)=>{
    console.log(items)
})
console.log(fruits.toString())
console.log(fruits.pop())
console.log(fruits.toString())
fruits.sort()
console.log(fruits.toString())
fruits.reverse()
console.log(fruits.toString())
}
fruitName();
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2)
function myFunction(value, index) 
{
    return value * index;
  }