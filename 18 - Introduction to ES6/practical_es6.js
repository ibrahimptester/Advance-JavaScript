// A "Shopping Cart" Demo Using ES6+ Features.

const products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
]

const [{name, price}, {name: name1, price: price1}] = products;
// Add new product with default parameter

const addProduct = (name, price = 0) => [...products, {name: name, price: price}]

// update products
const updatedProduct = addProduct("Keyboard")
console.log(updatedProduct);

// calculate the total price using rest operators

const calculateTotal = (...prices) => prices.reduce((accumulator, current) => accumulator + current, 0)

console.log(calculateTotal(price, price1))

// destructuring product details

const destructuring = (name, price) => `Product Name: ${name}, Product Price $${price}` 

// display product details

console.log(destructuring(name, price))
console.log(destructuring(name1, price1))


