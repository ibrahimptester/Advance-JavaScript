
// get Element by Id
const idDiv = document.getElementById('id-div')
console.log(idDiv)

// get Element by ClassName
const ClassName = document.getElementsByClassName('class-div')

// query Selector 
const querySelector = document.querySelector('.class-div')


// query selector all 
const querySelectorAll = document.querySelectorAll('.class-div')
console.log(querySelectorAll)

const tagName = document.getElementsByTagName('p')
tagName[0].innerHTML = "changed through getELementByTagName"

const forEachTest = document.querySelectorAll('span')

forEachTest.forEach((p) => p.innerHTML = "All Changed Successfully")