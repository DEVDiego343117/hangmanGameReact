export let numbers:number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 

for(let i=0; i <= numbers.length -1; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i] , "es un numero primo");
    } else {
        console.log(numbers[i] , "no es un numero primo");
    }
}