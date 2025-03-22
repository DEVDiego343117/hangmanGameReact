function max (num1: number, num2: number, num3: number) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3;
    }
}

export let maxValue:number = max( 7, 8, 14); 
console.log( maxValue ); 