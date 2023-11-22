//Task - 1
const countVC = (str) => {
    let obj = {
        vowels: null,
        consonats: null
    }
    arr = str.split('')
arr.filter(x => ('bcdfghjklmnpqurstvwxyz').includes(x.toLowerCase()) ? obj.consonats++ : null)
arr.filter(x => ('AOUEIaouei').includes(x) ? obj.vowels++ : "" )

return obj
}

console.log(countVC("Hello"))

//Task - 2
const countChars = (str) =>{
    const count = {
      letters: 0,
      numbers: 0,
      specials: 0
    };
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        count.letters++;
      } else if (/[0-9]/.test(char)) {
        count.numbers++;
      } else if (/[^\w\s]/.test(char)) {
        count.specials++;
      }
    }
  

    for (const key in count) {
      if (count[key] === 0) {
        delete count[key];
      }
    }
  
    return count;
  }



//Task - 3
const  maxOccurrences = (str) =>{
    let empty = [];
    if (str === '')
    return ''
    for (let i = 0; i < str.length; i++) {
        first = str[i]
        rest = str.slice([i+1])
        if (rest.includes(first))
        empty.push(first)
    }
    return empty[0]
}

//Task - 4
const starOut = (str) => {
    for (const el of str.split(' ')) {
        if (el.includes('*'))
            return el.replaceAll('*', '').slice(0, 1) + el.replaceAll('*', '').slice(-1)

    }
    return str
}

//Task - 5
const romanToInt = (str) => {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = roman[str[i]]
        const next = roman[str[i + 1]]
        if ((curr < next))
            (num -= curr)
        else if (num += curr);
    }
    return num
}