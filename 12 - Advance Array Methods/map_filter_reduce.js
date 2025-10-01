// Advance Array Methods: map(), filter(), reduce()

// 1. map() - this is used to create a new array and do some operation with the new array while the original array stay intact

const mapArray = [1,2,3,4,5]
const newArray = mapArray.map(number => number ** 2) // 
console.log(newArray);

// 2.filter() - used to get new array based on specific condition

const filterArray = [1,2,3,4,5,6,7,8,9,10,11]
const evenNumbers = filterArray.filter(number => number % 2 === 0)
const oddNumbers = filterArray.filter(number => number % 2 !== 0)
const numberLessThanSeven = filterArray.filter(number => number < 7)
console.log(evenNumbers);
console.log(oddNumbers);
console.log(numberLessThanSeven);

// 3. reduce() - used for calculation purpose - returns single value

const reduceArray = [50, 50, 100, 200]
const totalValue = reduceArray.reduce((acc, current) => acc + current, 0)
console.log(totalValue);







