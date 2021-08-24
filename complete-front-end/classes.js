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

Animal.planet = "Exandria";

// I'm a little confused about variables vs objects here. We are defining these animals like
// variables, but the guy keeps calling them objects, and they have multiple parameters/descriptors
// like objects do.

class Cat extends Animal {
  constructor(name, height, weight, meowVolume, hairballSize) {
      console.log("There is a cat.")
    super(name, height, weight);
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

let cat = new Cat("Frumpkin", 12, 5, 35, 0);
cat.meow();

class Bear extends Animal {
  constructor(name, height, weight, honeyHunger) {
      console.log("There is a bear.")
    super(name, height, weight);
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

let bear = new Bear("Trinket", 70, 350);
bear.hunger();

console.log(bear.nameLength());
console.log(bear.constructor.planet);
