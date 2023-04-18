function findItemMiss(array:number[]):number[] {
    let arrayItemMiss:number[] = [];
    let i:number = 1;
    while (i<11) {
        if (array.indexOf(i) == -1) {
            arrayItemMiss.push(i);
        }
        i++;
    }
    return arrayItemMiss;
}
console.log(findItemMiss([1,3,5,6,10]));