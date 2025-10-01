// Sample JSON Format
const user = {
    "name" : "Ibrahim",
    "age"  :  24,
    "Address" : {
        "city" : "New York",
        "zip" : 9614,
        "District" : "Uganda"
    }
}

// Sample Object
const person = {
    name: "Tiger-Mate",
    age: 25,
    country: "Bangladesh",
    location: "Unknown"
}
// Converting Object to JSON

const toJSON = JSON.stringify(person)
console.log(toJSON);

// converting JSON to object

const toObject = JSON.parse(toJSON)

console.log(toObject);


