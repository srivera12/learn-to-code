// imports
import React, { Component } from 'react';
import './Pokecard.css';

// pokecard component
class Pokecard extends Component {
  render() {
    function makeURL(id) {
      // adjusting the id # so it works in the url
      switch (`${id}`.length) {
        case 1:
          return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
        case 2:
          return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
        case 3:
          return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
        default:
          return undefined;
      }
    }
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={makeURL(this.props.id)} alt={this.props.name} />
        </div>
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.base_experience}</p>
      </div>
    );
  }
}

// exporting pokecard component
export default Pokecard;
