// ACCEESING A DOM ELEMENTS

//getElementById()
const pageHeading = document.getElementById('page-heading');
console.log(pageHeading)

const dombasics = document.getElementById('dom-basics');
console.log(dombasics)

const container = document.getElementsByClassName('container')
console.log(container) //HTML collection

for (let i = 0; i < container.length; i++){
    console.log(`Node ${i}: ${container[i]}`)
}
const firstcontainer = container[0]
const secondcontainer = container[1]
const thirtcontainer = container[2]

const images = document.getElementsByTagName('img');
console.log(images)

for (let i = 0; i < images.length; i++){
    console.log(images[i])
}

//queryselector
const par1 = document.querySelector('#par1')
const par2 = document.querySelector('.par2')
const section = document.querySelector('section')

console.log(par1)
console.log(par2)
console.log(section)

const allImages = document.querySelectorAll('img')
console.log(allImages)