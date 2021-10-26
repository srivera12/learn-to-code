// imports
import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

// pokedex component (contains a "hand" of pokecards)
class Pokedex extends Component {
  render() {
    // determining title based on if it's the winning or losing hand
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {/* looping through the cards and rendering them */}
          {this.props.pokemon.map((p) => {
            return <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />;
          })}
        </div>
      </div>
    );
  }
}

// exporting
export default Pokedex;
