export class Car {
    private readonly brand: string;
    doors: number;
    gearbox: string;
    speed: number;
    fuelTank: number;
    isRunning: boolean;
    private readonly type: string;
    private readonly createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 4;
        this.gearbox = "Automatico";
        this.speed = 150;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 1234123;

    }

    turnOn() {
        if (this.isRunning){
           console.log("El carro ya estaba encendido");
           return;
        }

        if(this.fuelTank <=0){
            console.log("El carro no tiene combustible");
            return;
        }

        this.isRunning = true;
        console.log("El carro esta encendido");
        
    }

    fillTank (gas: number) {
        if (gas <= 0) {
            ("La gasolina debe ser mayor a 1");
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100) {
            this.fuelTank = 100;
        } else {
            this.fuelTank = newFuelTank;
        }
    }
}

let myHonda = new Car("Honda", "Accord");
// let myChevrolet = new Car("Chevrolet", "Camaro");

// myHonda.brand = "Mazda" Privado

myHonda.fillTank(50);
myHonda.turnOn();
console.log(myHonda);

// myChevrolet.fillTank(120);
// myChevrolet.turnOn();
// console.log(myChevrolet);
