const form = document.getElementById("contactForm")
const nameInput = form[0]
const emailInput = form[1]
const passwordInput = form[2]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        alert("Please fill out the form correctly")
    } else if (nameInput.value || emailInput.value || passwordInput.value === "  "){
        alert("No Cheating Please")
} else {
    alert('Form Submitted Successfully')
    }
}
)

