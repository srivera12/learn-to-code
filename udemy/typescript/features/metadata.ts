// importing metadata - doesn't need to be stored in a variable, automatically tied to global variable 'Reflect'
import 'reflect-metadata';

const plane0 = {
  color: 'red',
};

// adding metadata - essentially like defining an invisible property - params (keyName, value, object)
Reflect.defineMetadata('note', 'hello world', plane0);
Reflect.defineMetadata('speed', 500, plane0);

// how to access/see metadata - params (keyName, object)
const note = Reflect.getMetadata('note', plane0);
console.log(note);
const speed = Reflect.getMetadata('speed', plane0);
console.log(speed);

// tying metadata to an existing property - params (key, value, object, propertyName)
Reflect.defineMetadata('colorOpinion', 'not a fan of red', plane0, 'color');

// accessing metadata on a property
const colorOpinion = Reflect.getMetadata('colorOpinion', plane0, 'color');
console.log(colorOpinion);

// metadata in classes
@printMetadata
class Plane {
  airline: string = 'delta';

  @markFunction('this is a secret')
  fly(): void {
    console.log('whooosh');
  }
}

// decorator function
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// accessing the metadata in the class
const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);

// accessing all metadata in a class - requires name, but not property it is assigned to
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    console.log(
      `Metadata called secret says: ${Reflect.getMetadata('secret', target.prototype, key)}, and is on property: ${key}`
    );
  }
}
