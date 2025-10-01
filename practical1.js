// Managing Shopping Cart

const cart = [
    {name: "Laptop", price: 800, quantity: 2}, // 800 * 2 = 1600
    {name: "Mouse", price: 20, quantity: 2}, // 20 * 2 = 40
    {name: "Keyboard", price: 50, quantity: 2}, // 50 * 1 = 100
]
 
// step 1 - Calculating Total price of Products without quantity
const totalPrice = cart.reduce((acc, current) => acc + current.price, 0)
console.log(totalPrice);

// calculating with quantity
const totalCost = cart.reduce((acc, crr) => acc + crr.price * crr.quantity, 0)
console.log(totalCost);

// step - 2 - Filtering products
const expensiveItems = cart.filter(product => product.price > 500)
console.log("Expensive Item:", expensiveItems);


// step - 3 - Displaying Items

const allItems = cart.map(product => product)
console.log(allItems);
