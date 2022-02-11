function error() {
    try {
        console.logs("Welcome guest!");
        throw "spelling mistake";
    }
    catch (err) {
        console.log(err.message)
    }
}
function error1() {
    let x = 5;
    try {
        x = y + 1;   
    }
    catch (err) {
        console.log(`The error type is: ${err.name} and error message is: ${err.message}`)
    }
}
error();
error1();
