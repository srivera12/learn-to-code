// without interface
const oldCivic0 = {
  name: 'civic',
  year: 2000,
  broken: true,
};
const printVehicle0 = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`);
};
printVehicle0(oldCivic0);

// with interface
interface Vehicle0 {
  name: string;
  year: number;
  broken: boolean;
}
const printVehicle1 = (vehicle: Vehicle0): void => {
  console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`);
};
printVehicle1(oldCivic0);

// interfaces are not limited to primitive values
interface Vehicle1 {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
const oldCivic1 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken? ${this.broken}`;
  },
};
const printVehicle3 = (vehicle: Vehicle1): void => {
  console.log(vehicle.summary);
};
printVehicle3(oldCivic1);

// refactoring
interface Reportable {
  summary(): string;
}
const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};
printSummary(oldCivic1);

// why the above refactor matters
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};
printSummary(drink);
