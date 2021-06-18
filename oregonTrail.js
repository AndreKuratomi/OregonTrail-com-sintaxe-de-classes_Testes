// Traveler:
class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2;
    }

    eat() {
        if (this.food > 0) {
            this.food--;
        }
        this.isHealthy = false;
    }
};


// Wagon:
class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        if (this.capacity > this.passengers.length) {
            let available = this.capacity - this.passengers.length;
            return available; 
        }
        return 0;
    }
    
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }

    shouldQuarantine() {
        let sickPassenger = Traveler.bind(this.isHealthy = false);
        console.log(sickPassenger)

        for (let count = 0; count < this.passengers.length; count++) {
            if (this.passengers.includes(sickPassenger)) {
                return true;
            }
        }
        return false;
    }

    totalFood() {
        return this.passengers.length + 1; //considerei o cocheiro
    }
};



// TESTE:

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);