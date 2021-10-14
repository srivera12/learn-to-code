// imports
import { APISync } from './APISync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { Collection } from './Collection';

// interface for the properties of User
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// rootURL variable
const rootURL = 'http://localhost:3000/users';

// User class, after final refactor, is a 'Model' class
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new APISync<UserProps>(rootURL));
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootURL, (json: UserProps) => User.buildUser(json));
  }
  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
