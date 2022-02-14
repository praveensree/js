function one() {
    console.log('First');
}

function two() {
    console.log('Second');
}

function three() {
    console.log('Third');
}

function main() {

    console.log('Main');

    setTimeout(one, 2000);
    setTimeout(three, 3000);

    new Promise((resolve, reject) =>
        resolve('First Promise')
    ).then(resolve => console.log(resolve));


    new Promise((resolve, reject) =>
        resolve('Second Promise')
    ).then(resolve => console.log(resolve));

    two();
}

main();
//
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 05;
  

  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  myDisplayer=(val)=>{
    console.log(val)
  }