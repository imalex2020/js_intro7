const reverseNum  = (num) =>{
    let result = 0
    for(i = num; i > 0; Math.floor(i / 10))
    result = (i * 10)  + (i % 10)
}


const isArmstrong = num =>{
    let NewNum = 0
    arr = num.toString().split().forEach( x =>{
    NewNum += Number(x) ** arr.length
     
    })
    

}
