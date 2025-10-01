// Filtering and Extracting Data

const users = [
    {name: "Alice", age: 25, isActive: true, email: "alice@gmail.com"},
    {name: "Bob", age: 17, isActive: false, email: "bob@gmail.com"},
    {name: "Charlie", age: 19, isActive: true, email: "charlie@gmail.com"},
]

// step - 1 filtering users that are above 18 years old and are active 
const eligibleUsers = users.filter(user => user.age >= 18 && user.isActive )
console.log(eligibleUsers) 

// step - 2 - Extracting their emails
const userEmails = eligibleUsers.map(email => email?.email)
console.log("Email of users are:", userEmails);
