const inputText = document.getElementById('inputText')
const display = document.getElementById('display')

inputText.addEventListener("keydown", (event) => {
    display.innerHTML = `You pressed ${event.key}`
} )

inputText.addEventListener("keyup", (event) => {
    display.innerHTML = `You released ${event.key} key`
})