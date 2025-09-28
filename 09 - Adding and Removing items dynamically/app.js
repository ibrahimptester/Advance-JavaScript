


const list = document.getElementById("list");
const addButton = document.getElementById('addButton')
const removeButton = document.getElementById('removeButton')

addButton.addEventListener("click", () => {
    const newItem = document.createElement("li")
    newItem.innerText = `Fruit ${list.children.length +1}`
    list.appendChild(newItem)
    console.log(newItem.innerText)
})

removeButton.addEventListener("click", () => {
    list.removeChild(list.lastChild)
})

const display = document.getElementById("display");
const addParagraph = document.getElementById("addParagraph") 
const removeParagraph = document.getElementById("removeParagraph")
const inputText = document.getElementById("inputText")

addParagraph.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `${display.children.length +1}. ${inputText.value}`
    display.appendChild(newParagraph)
    
})
console.log(display)
removeParagraph.addEventListener("click", () => {
    display.removeChild(display.lastChild)
    
})

