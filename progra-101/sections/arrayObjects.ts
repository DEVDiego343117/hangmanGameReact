interface Person {
    name: string
    age: number
    gender: string
    isActive: boolean
}

export let diego:Person = {
    name: "Diego",
    age: 18,
    gender: "Male",
    isActive: true
}

let sara:Person = {
    name: "Sara",
    age: 16,
    gender: "Female",
    isActive: false
}

let jose:Person = {
    name: "Jose",
    age: 25,
    gender: "Male",
    isActive: true
}

let people: Person[] =[diego ,sara ,jose];

console.log(people)

for (let i = 0; i <= people.length-1; i++) {
    let person = people[i];
    console.log(person.name + " " ,person.age + " " ,person.gender +" " ,person.isActive);
}