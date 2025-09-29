const form = document.getElementById("contactForm")
const nameInput = form[0];
const emailInput = form[1];
const subjectInput = form[2];
const messageInput = form[3];

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    nameError.textContent = ""
    emailError.textContent = ""
    subjectError.textContent = ""
    messageError.textContent = ""

    let isValid = true;
    if(nameInput.value.trim() === "" || nameInput.value.length < 3){
        nameError.textContent = "Please Enter your name correctly"
        isValid = false;
    }
    if(!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
   }
   if (subjectInput.value.length < 5){
    subjectError.textContent = "Subject must be at least five characters long"
    isValid = false;
   }
   if (messageInput.value.length < 10){
    messageError.textContent = "Message must be at least ten characters long"
    isValid = false;
   }
   if(isValid) {
    successMessage.style.display = "block"
    form.reset();
   }

})