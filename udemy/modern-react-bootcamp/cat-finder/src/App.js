import './App.css';
import Nav from './Nav';
import React, { Component } from 'react';
import Routes from './Routes';

const horace =
  'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
const patches =
  'https://images.unsplash.com/photo-1596854372407-baba7fef6e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
const spice =
  'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80';

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: 'Horace',
        age: 5,
        src: horace,
        facts: [
          'Horace can be a little shy.',
          'Horace loves napping in tight spaces.',
          'Horace can be very talkative once he warms up to you!',
        ],
      },
      {
        name: 'Patches',
        age: 3,
        src: patches,
        facts: [
          'Patches is VERY friendly!',
          'Patches loves playing with toys.',
          'Patches is very high energy; he likes going for walks, like a dog.',
        ],
      },
      {
        name: 'Spice',
        age: 1,
        src: spice,
        facts: [
          'Spice is very young, so she is not litter-trained yet.',
          'Spice has a lot of energy, like all kittens do.',
          'Spice loves playing hide-and-seek.',
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Nav cats={this.props.cats} />
        <div className="container">
          <Routes cats={this.props.cats} />
        </div>
      </div>
    );
  }
}

export default App;
