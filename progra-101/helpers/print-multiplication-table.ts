export function printMultiplicationTable(num1: number, num2: number = 10) {
    let base: number = num1;
    let limit: number = num2;

    // if (limit <= 0){
    //     throw new  Error("El limite debe ser mayor a ;d")
    // }

    if (limit <= 0){
        limit = 10;
    }

    for (let i = 1; i <= limit; i++) {
        console.log(base, " x ", i, " = ", limit * i);
    }
}