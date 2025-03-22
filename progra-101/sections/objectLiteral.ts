export let person = {
    //Objeto literal
    name: "Diego",
    age: 18,
    isActive: true,
    hobbies: ["Basketball", "Music", "Videogames"],
    //Propiedades de objeto

    //Programacion metodo
    toString(printAll:boolean) {
        let objectString = this.name + ' '+ this.age + " " + this.hobbies + " " + this.isActive;
        console.log(objectString);
    }
}

// console.log(person.name.toUpperCase());
// person.toString(true);


let car = {
    brand: "Chevrolet",
    speed: 150,
    doors: 2,
    color: "black",
    isNew: true
}

let smartTv = {
    model: "LG",
    sizeInches: 60,
    resolution: 3120,
    year: 2021
}

let youtubeVideo = {
    likes: 5000,
    views: 1000000,
    timeMinuts: 10,
    Comments: ["Buen video", "Primero:D", "Borra la cuenta"],
    dislikes: 300
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
