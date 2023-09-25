const parentElement = document.getElementById('parent');
//getall the child nodes of parentElement
const childIs = parentElement.childNodes;
console.log(childIs)

const children = parentElement.children;
console.log(children) //nodes

const countiesHeading = document.getElementById('countries')
const parentOfHeading = countiesHeading.parentElement;

console.log(parentOfHeading);


// Node atributes
const container = document.querySelector('.container');
const images = document.querySelectorAll('img')
 //const images = container.children

 const firstImage = images[0];

 console.log(firstImage.src) //url
 console.log(firstImage.alt) //alt text

 const newUrl = 'https://tse2.mm.bing.net/th?id=OIP.dh9AWBD2vmtsJF6MLwxFdwE9DE&pid=Api&P=0&h=180'

 firstImage.src = newUrl;
 console.log(firstImage)

//Node atribures
//getAttribute
const imgUrl = firstImage.getAttribute('src');
console.log(imgUrl === newUrl);

//setAttribute
firstImage.setAttribute('alt', 'beautiful nature')
const altText = firstImage.getAttribute('alt')
console.log(altText === 'beautiful nature')

const bodyEl = document.querySelector('body');
console.log(bodyEl)

bodyEl.style.backgroundColor = 'lightyellow'
bodyEl.style.textAlign = 'center'

for(let i = 0; i < images.length; i++){
    let imageEl = images[i]
    imageEl.style.width = "300px"
    imageEl.style.height = "150px"
    imageEl.style.border = '4px solid green'
}

///className vs classlist

const boxEl = document.querySelector('.box');

console.log(boxEl.className)
console.log(boxEl.classList)

//boxEl.className = 'box2'
boxEl.className += ' box2';

boxEl.classList.add('box3');
boxEl.classList.remove('box')

//bodyEl.innerHTML = ' ';
parentElement.innerHTML = `    
<li>USA</li>
<li>Nigeria</li>
<li>Japan</li>
<li>Germany</li>
<li>France</li>`

/**
 * create an element
 */

const p2 = document.createElement('p');
console.log(p2)

//add a content to it
p2.innerHTML = 'Box 2'
console.log(p2); // <p> box 2<\P>

//2nd way
//const textNode = document.createTextNode('Box 3'); //#text
//p2.appendChild(textNode);
//console.log(p2)

//Append p2 to box element
boxEl.append(p2);
parentElement.append(p2)

//

