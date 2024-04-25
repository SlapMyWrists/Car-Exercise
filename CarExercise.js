class newCar{
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";
    }
    toString(){
        return "The care you chose is a ${this.make} ${this.model} from ${this.year}"
    }

}

class car extends newCar{
    constructor (make, model, year){
        super(make, model, year);
            this.numWheels = 4;
        }
    }
class bike extends newCar{
    constructor(make, model, year){
    super (make, model, year);
    this.numWheels = 2
}
    revEngine(){
        return "Vroom!!!";
    }
}
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(){
        if(!(newCar instanceof car)){
            return "Only vehicles allowed!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Full capacity";
        }
        this.vehicles.push(newCar);
        return "Added vehicle.";
    }
}
