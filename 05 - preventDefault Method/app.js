const form = document.getElementById('myForm')
const nameInput = document.getElementById('nameInput')
const display = document.getElementById('display')

form.addEventListener("submit", (event) => {
    event.preventDefault() // prevent reloading
    display.innerHTML = `Form is Submitted by ${nameInput.value}`
})