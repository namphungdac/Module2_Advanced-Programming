function checkPerfect(number) {
    let arr = []
    for (let i = 1; i < number; i ++){
        if (number % i === 0){
            arr.push(i)
        }
    }
    return arr.reduce((sum, a) => sum + a) === number ? 'Perfect' : 'notPerfect'
}
console.log(checkPerfect(6));