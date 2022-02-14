let EmpDetail = {
    Name : 'Sree',
    Role : 'Dev',
    Skills : '.Net'
};

console.log(EmpDetail.Name); 
console.log(EmpDetail['Role']);

let Bike = {
    Model : 'Interceptor',
    Brand : 'RE',
    engine : '650cc'
};

Bike.fuelType = 'Petrol';
console.log(Bike);

const Loan ={
    isPending:false,
    approve: function(){
        console.log(`Loan Number: ${this.num}  and pending loan status is now: ${this.isPending}`);
    }
}
const EMI = Object.create(Loan);
EMI.num = '987654321';
EMI.isPending = true;
EMI.approve();
