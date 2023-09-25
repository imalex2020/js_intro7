//DOM

console.log(window);

//window object
//window.alert("Here is the alert messege!");

//promt
//let promptResult  = window.prompt();
//console.log(promptResult);

//confirm
//let confirmResult = window.confirm('Are you ready');
//console.log(confirmResult);

console.log(window.innerWidth)
console.log(window.innerHeight)

//ScrollTo(x, y)
window.scrollTo(0, 0)

//location - object
//window.location.reload()

//localStorage
console.log("local storage",  window.localStorage.length) // 0
window.localStorage.setItem('name', 'John')
window.localStorage.setItem("LoggenIn", false)
window.localStorage.setItem("User_id", 123)
window.localStorage.setItem("userinfo", JSON.stringify({name: "John", email: 'email@Gmail.com'}))
window.localStorage.getItem('name');
console.log(window.localStorage.getItem('is Logged in'));
console.log(JSON.parse(window.localStorage.getItem('userinfo')))

//remove item
window.localStorage.removeItem('name')
window.localStorage.removeItem('user_id')
window.localStorage.clear();

/* 1.Ask user a name
2. Alert users name
3. Confirm if user wants to continue
3.1 If users says Yes => Alert you have choosen to continiue
3.2 If users says No => Alert "You canceled the action
4. Console.log users browser inner Width and inner innerHeight
5. Reload a page after 10 second to start again*/


let UserName = window.prompt("What is your name?")
if (UserName === null || UserName === "") window.alert("You didn't provide your name, bye - bye")
else window.alert("Hello," + " " + UserName)

let confirm = window.confirm("Do you want to continuie?")
if (confirm === true) window.alert('You have choosen to continue')
else window.alert('You canceled the action')


console.log(`You device dimension are heigth: ${window.innerHeight} and width: ${window.innerWidth}`);
//window.location.reload()

setTimeout(() =>{
window.location.reload();
}, 10000)