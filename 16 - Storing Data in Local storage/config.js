const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const formData = {
    name,
    email,
    message
  }
  localStorage.setItem("formData", JSON.stringify(formData))
  alert('Form data saved successfully')
})


// load data from local storage 
const loadFormData = () => {
const loadedData = localStorage.getItem("formData")
  const parsedData = JSON.parse(loadedData)
  
  //show parsed data to form
  const name = parsedData.name;
  const email = parsedData.email;
  const message = parsedData.message;
  
  nameInput.value = name;
  emailInput.value = email;
  messageInput.value = message;

  
}

document.addEventListener("DOMContentLoaded", loadFormData)


// remove data from form and local storage 

resetButton.addEventListener("click", () => {
  localStorage.removeItem("formData")
  alert('Data removed successfully')
})