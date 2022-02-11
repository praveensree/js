
function  Car(out){
    return function partner(inside){
        console.log(out)
        console.log(inside)

    }
}
const obj = Car('Maruti')
obj('Suzuki')