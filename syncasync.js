

function one() {
    console.log('first');
}

function two() {
    console.log('second');
}
function three() {
    console.log('Third');
}

function main() {
    console.log('Main');

    setTimeout(one, 0);
    setTimeout(three, 2000);

    two();
}


main();