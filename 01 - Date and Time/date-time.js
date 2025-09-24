// date object

let date = new Date()
console.log(date)


// specific time and date
let specificDate = new Date('2024-11-21T10:30:00');
console.log(specificDate);

//custom date
const customDate = new Date(2026, 10, 2, 12, 0, 0, 0)
console.log(customDate)


// Getting and Setting Dates

date = new Date()

console.log("Getting the year:", date.getFullYear())
console.log("Getting the month:", date.getMonth() +1)
console.log("Getting the date:", date.getDate())
console.log("Getting the hour:", date.getHours())
console.log("Getting the minutes:", date.getMinutes())

// setting date and time

date.setFullYear(2027)
console.log(date.getFullYear())
date.setMonth(11)
console.log(date.getMonth() +1)
date.setDate(31)
console.log(date.getDate())

// Formatting Date and Time

date = new Date()
console.log(date.toLocaleDateString())
console.log(date.toLocaleDateString("en-GB")) //british format
console.log(date.toLocaleDateString("fr-FR")) //french format
console.log(date.toLocaleTimeString())
console.log(date.toLocaleTimeString("en-GB"))
console.log(date.toLocaleTimeString("fr-FR"))

// Presenting Date and time in a friendly way with function
date = new Date()
function displayDateTime () {
    console.log("Today's date is:", date.toLocaleDateString("en-GB"))
    console.log("Currently the time is:", date.toLocaleTimeString())
}
displayDateTime();


