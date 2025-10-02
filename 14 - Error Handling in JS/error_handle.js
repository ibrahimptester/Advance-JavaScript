// Handling Errors in Js using try catch and finally and throwing custom errors using throw new error

const checkAge = (age) => {
    if (age < 18) 
        throw new Error("You are not eligible to vote")
    else {
        console.log("You're eligible to vote")
    }
}

try{
    checkAge(16)
} catch (err) {
    console.error(err.message)
} finally { console.log("Check Age Process Completed")
    }