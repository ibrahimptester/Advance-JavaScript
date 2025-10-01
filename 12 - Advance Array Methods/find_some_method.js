// Using find () and some () for advance searches

// 1. find () - returns only one result that match first 

const users = [
    {name: "Alice", age: 22}, 
    {name: "Bob", age: 27},
    {name: "Oggy", age: 7}
]

const matureUsers = users.find(user => user.age >= 18)
console.log(matureUsers);

// 2. some () - checks if at least one item of the array matches the condition based on that returns true or false 

const products = [
    {name: "PC", price: 6000},
    {name: "Monitor", price: 3000},
    {name: "Keyboard", price: 500},
    {name: "Mouse", price: 300}
]

const expensiveItems = products.some(item => item.price > 500)
console.log(expensiveItems);

const filteredProducts = products.filter(product => product.price >= 500)
console.log(filteredProducts);
const arrayOfFilteredProductsName = filteredProducts.map(product => product.name)
console.log(arrayOfFilteredProductsName);
 

