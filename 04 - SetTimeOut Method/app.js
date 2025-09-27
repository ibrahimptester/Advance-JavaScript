const click = document.getElementById('click') 
const display = document.getElementById('display')

click.addEventListener("click", () => {
    display.innerText = "Event listener triaged"

    
setTimeout(() => {
    click.style.backgroundColor = "red"
    click.style.padding = "15px"
    
}, 2000)
})

