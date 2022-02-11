function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));


  let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1,...arr2];
console.log(sum(arr1));
