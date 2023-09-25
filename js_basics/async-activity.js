//create a simple to-do list
//Objective is to practice OOP classes and callbacks, promises and async await

/*
Step 1: Create class task and TaskManager
Step 2: TaskManager will have properties of: what a list has 
    id: number
    title: string
    description: string 
    cretedAt: data. ex: new Date()

Step3: Task manager will responsible for adding, updating and deleting a list.
    Also listing all the lists.

    a.Store all the list in an array

    b. Create a function to add a list to my array of lists

    c. Create a fucntion to list(console) all my lists

    d.Create a function to update any list from my array (Use an id)

    c. Create a function to delete a list from my array of lists.

*/

class Todo {
    constructor(id, title, decription) {
        this.id = id;
        this.title = title;
        this.decription = decription;
        this.createAt = new Date();
    }
}
class TodoManager {
    // createAToDo() => asynchronous task
    constructor() {
        this.AllTodos = []
    }
    createATodo(newTodo, callback) {
        setTimeout(() => {
            this.AllTodos.push(newTodo)
            callback("Success")
        }, 2000)
    }
    // listTodos() => asynchronous task
}
const todoManager = new TodoManager()
todoManager.createATodo(new Todo(1, "Watch TV", "On weekend and this show"), (messege) => {
    console.log(messege)
    console.log(todoManager)
})

// 1st part
const getRandomNumber = () => {
    let rNum = Math.floor(Math.random() * 10) + 10;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(rNum);
        }, 2000);
    })
}

// second part
let randomnum = getRandomNumber() //return promise
getRandomNumber()
.then(num => {
    console.log(num); //15
    if (num > 15) console.log ('Number is valid')
    else console.log('Number is invalid')
})
.catch(err => console.log(err));







