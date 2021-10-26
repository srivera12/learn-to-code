// imports
import React, { Component } from 'react';
import Pokegame from './Pokegame';

// App component - basically just a wrapper in this case
class App extends Component {
  render() {
    return (
      <div>
        <Pokegame />
      </div>
    );
  }
}

// exporting to index
export default App;
