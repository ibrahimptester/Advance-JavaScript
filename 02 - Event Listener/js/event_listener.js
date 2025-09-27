const clickMe = document.getElementById('clickMe');
const hover = document.getElementById('hover')
clickMe.addEventListener("click", () => {
    alert("Button is Clicked")
})

hover.addEventListener("mouseover", () => {
    hover.style.backgroundColor = "Red"
})

hover.addEventListener("mouseout", () => {
    hover.style.backgroundColor = "greenyellow"
})



