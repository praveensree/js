const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department': {
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}
const { department: { address: { city } } } = user;

console.log(city)


const colours = ['RED', 'YELLOW','GREEN'];

const [R, G, B] = colours;
console.log(R);
console.log(G);
console.log(B); 

const [a, ...b] = [1, 2, 3];
console.log(a); 
console.log(b);

