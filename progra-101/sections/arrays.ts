export let employees:string[] = ["Diego", "Lopez", "Eduardo", "Juan"];
export let salaries:number[] = [1500, 2400, 3200, 4800];

// let flowers:string[] = ["Rosa", "Girasol", "Lirio", "Diente de Leon"];

// if(people[3]){
//     console.log(people[3]);
// }
   
// for(let i = 0; i<= flowers.length; i++){
//     console.log(flowers[i]);
// } 

for (let i = 0; i <= employees.length-1; i++) {
    console.log(employees[i], "tiene un salario de", salaries[i]);
}