// imports
import { User, UserProps } from '../models/User';
import { View } from './View';

// the class that shows input and buttons for editing users
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSaveClick = (): void => {
    this.model.save();
  };
  template(): string {
    return `
        <div>
            <input placeholder="${this.model.get('name')}"/>
            <button class="set-name">Update Name</button>
            <br/>
            <button class="set-age">Set Random Age</button>
            <br/>
            <button class="save-model">Save</button>
        </div>
        `;
  }
}
