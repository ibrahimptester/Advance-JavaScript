// spread operator (...): expands an array or object (make a copy of the array or object)
// rest operator (...): collects remaining elements into an array or object

let user ={
    name: "ibrahim"
}
user.age = 18 

console.log(user);

// Spread Operator

let array = ["Emon", "Tamim", "Saif"]
let otherPlayers = [...array, "Jaker Ali", "Shamim", "Sohan"]
console.log(otherPlayers);
//using spread operator in an Object
let product = {
    name: "PC",
    price: 50000
}

let updatedProduct = {...product, Processor: "Intel", MotherBoard: "GigaByte"}
console.log(updatedProduct);

// rest operator
let number = [10, 20, 30, 40]
let [first, second, ...rest] = number;

console.log(rest);


