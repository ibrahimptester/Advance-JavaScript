// destructuring array and object all at once

let person = [
    {
        name: "Ibrahim",
        age: "24",
        Country: "Bangladesh",
        Address: {
            city: "Dhaka",
            zip: 1100
        }
    }
]

const [{name, age, Country, Address: {city, zip}}] = person;
console.log(city)


const user = {
    fullName: "Joy",
    address: {
        town: "Paris",
        code: "123",
    },
    hobbies: ["Reading", "Travelling", "Coding"]
}

const {fullName, address: {town, code}, hobbies: [firstHobby, secondHobby, thirdHobby]} = user; // 1st time destructuring

console.log(firstHobby);

