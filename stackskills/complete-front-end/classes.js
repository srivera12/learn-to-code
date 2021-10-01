class Animal {
  constructor(name, height, weight) {
    console.log("Created animal named", name);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  nameLength() {
    return this.name.length;
  }
}

Animal.prototype.planet = "Exandria";

class Cat extends Animal {
  constructor(name, height, weight, meowVolume, hairballSize) {
    super(name, height, weight);
    console.log("There is a cat.");
    this.meowVolume = meowVolume;
    this.hairballSize = hairballSize;
  }

  meow() {
    if (this.meowVolume > 50) {
      console.log(this.name, "meows loudly!");
    } else {
      console.log(this.name, "meows quietly.");
    }
  }
}

const cat = new Cat("Frumpkin", 12, 5, 35, 0);
console.log(cat.planet);
cat.meow();
console.log(cat.nameLength());

class Bear extends Animal {
  constructor(name, height, weight, honeyHunger) {
    super(name, height, weight);
    console.log("There is a bear.");
    this.honeyHunger = honeyHunger;
  }

  hunger() {
    if (this.honeyHunger > 5) {
      console.log(this.name, "is hungry for honey.");
    } else {
      console.log(this.name, "isn't hungry.");
    }
  }
}

const bear = new Bear("Trinket", 70, 350);
bear.hunger();

console.log(bear.nameLength());
console.log(bear.planet);
