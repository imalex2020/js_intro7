//DOM EVENTS
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', (event) => {
    console.log(event.target);
    console.log('you clicked!', event.target)
})

const dblclick = document.getElementById('dblclick');

dblclick.addEventListener('dblclick', (event) => {
    console.log('You double click the but', event.target)
})

//mousedown
const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event => {
    console.log(" you pressed down", event.target)
}))

//mouseup
const mouseupBtn = document.getElementById('mouseupBtn');

mouseupBtn.addEventListener('mouseup', (event => {
    console.log(" you pressed up", event.target)
}))

//mousemove

const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove', (event) =>{
    console.log('You moving inside button', event.targer)
})
const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseOutBtn.addEventListener('mouseout', (event) =>{
    console.log('You going out from button =>', event.targer)
})

//keyword event

const body = document.querySelector('body');

//keydown
body.addEventListener('keydown', (event) =>{
    console.log('keydown event =>', event.target)
})

//forms events
//Change Event

changeInput.addEventListener('change', (event) =>{
   console.log(event.target.value)
})


//Input
const inputInput = document.getElementById('inputInput');
inputInput.addEventListener('input', (event) =>{
   console.log(event.target.value)
})

//focus 
formInput = document.getElementById('formInput');
formInput.addEventListener('focus', (event) =>{
    event.target.style.backgroundColor = 'darkred';
    event.target.style.color ='white'
})

//submit
//scroll
window.addEventListener('scroll', (event) =>{
    console.log('You are scrolling the page')
    console.log(`And your cordinates X: ${window.scrollX} and Y: ${window.scrollY}`)
})