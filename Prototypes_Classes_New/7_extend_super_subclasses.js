//extend -- dziedziczenie z innej klasy
//super -- 

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating.`;
	}
}

//Defining Cat class and inheritancing name and age from class Pet
class Cat extends Pet {
    //I want cat to have additional variables like "livesLeft"
    //I dont have to do this.name, this.age. I can just do super(name, age) and it will get it from parent Pet class
    	constructor(name, age, livesLeft = 9) {        
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEEEEEOOOW';
	}
}

//Defining Dog class and inheritancing name and age from class Pet
class Dog extends Pet {
	bark() {
		return 'WOOOOF';
	}
}

const minia = new Cat('Minia', 3);
const michu = new Dog('Michu', 13);
