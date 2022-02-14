
var bike = {
    registrationNumber: "TN65",
    brand: "KTM",

    displayDetails: function (name) {
        console.log(name + ", this is your Bike: " +this.registrationNumber + " " + this.brand);
    }
}
var myBikeDetails = bike.displayDetails.bind(bike,'Praveen'); 
myBikeDetails();


var car = { 
    registrationNumber: "KA29",
    brand: "Jaguar"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(car, ["Sree"]);//apply

displayDetails.call(car, "sree");//call