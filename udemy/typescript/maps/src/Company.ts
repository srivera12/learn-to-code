// importing 'faker' and the interface
import faker from 'faker';
import { Mappable } from './CustomMap';

// the Company class
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div><h1>${this.name}</h1>
     <h3>${this.catchPhrase}</h3><div>`;
  }
}
