// imports
import { Collection } from './models/Collection';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { UserProps } from './models/User';

// creating a display user
const user = User.buildUser({ name: 'NAME', age: 26 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('root element not found');
}

// displaying all users
const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});
users.on('change', () => {
  const parent = document.getElementById('list');
  if (parent) {
    new UserList(parent, users).render();
  }
});
users.fetch();
