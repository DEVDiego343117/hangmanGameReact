export let numbers:number[] = [1, 6, 8, 4, 14, 7, 10, 3, 5 ];
let maxNumber = numbers[0];

for(let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] >= maxNumber) {
        maxNumber = numbers[i]
    } 
}  
console.log("El numero mayor fue de:" ,maxNumber);