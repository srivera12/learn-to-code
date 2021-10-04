// basic classes
class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep beep');
  }
}
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

// class inheritance
class Car extends Vehicle {
  drive(): void {
    console.log('vroom vroom');
  }
}
const car = new Car();
car.drive();
car.honk();

// in TS, classes can have modifiers - private
class Vehicle1 {
  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep beep');
  }
}
const vehicle1 = new Vehicle1();
vehicle1.drive();
vehicle1.honk();
class Car1 extends Vehicle1 {
  private drive1(): void {
    console.log('vroom vroom');
  }
  startDrivingProcess(): void {
    this.drive1();
  }
}
const car1 = new Car1();
car1.startDrivingProcess();
car1.honk();

// in TS, classes can have modifiers - protected
class Vehicle2 {
  public drive(): void {
    console.log('chugga chugga');
  }
  protected honk(): void {
    console.log('beep beep');
  }
}
const vehicle2 = new Vehicle2();
vehicle2.drive();
class Car2 extends Vehicle2 {
  private drive1(): void {
    console.log('vroom vroom');
  }
  startDrivingProcess(): void {
    this.drive1();
    this.honk();
  }
}
const car2 = new Car2();
car2.startDrivingProcess();

// fields
class Vehicle3 {
  constructor(public color: string) {}
  public drive(): void {
    console.log('chugga chugga');
  }
  protected honk(): void {
    console.log('beep beep');
  }
}
const vehicle3 = new Vehicle3('red');
console.log(vehicle3.color);
vehicle3.drive();
class Car3 extends Vehicle3 {
  private drive1(): void {
    console.log('vroom vroom');
  }
  startDrivingProcess(): void {
    this.drive1();
    this.honk();
  }
}
const car3 = new Car3('blue');
car3.startDrivingProcess();
