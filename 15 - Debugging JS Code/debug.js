// TODO: To-Do List App, you can add new task, or remove or delete existing tasks

const tasks = []

const addFunction = (task) => {
    if(!task || task.trim() === "")
        throw new Error("Task Cannot be Empty")
        else{
            tasks.push(task)
            console.log("Task Added Successfully")
        }
    
}


const removeFunction = (index) => {
    if (index < 0 || index > tasks.length)
        throw new Error("Index Cannot be lesser than 0")
    else {
        tasks.splice(index - 1, 1)
        console.log(`Task Number ${index} removed successfully`)
    }
}


addFunction("Learn JavaScript")
addFunction("Learn Tailwind CSS")
addFunction("Learn React")
addFunction("Learn Express JS")
addFunction("Learn FireBase Authentication")
addFunction("Learn Redux")
addFunction("Learn Next JS")
addFunction("Learn Next TypeScript")
addFunction("Learn How to remove items form an array")
console.log(tasks);
removeFunction(9)
console.log(tasks);
addFunction(8)
console.log(tasks)


