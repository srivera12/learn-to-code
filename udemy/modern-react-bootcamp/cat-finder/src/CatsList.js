import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CatsList.css';

class CatsList extends Component {
  render() {
    return (
      <div className="CatsList">
        <h1 className="display-1 text-center mt-3 mb-5">Meet The Cats!</h1>
        <div className="row">
          {this.props.cats.map((cat) => (
            <div className="CatList-cat col-lg-4 col-md-6 text-center" key={cat.name}>
              <NavLink to={`/cats/${cat.name}`}>
                <img className="CatsList-img" src={cat.src} alt={cat.name} />
              </NavLink>
              <h3 className="underline mt-3">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CatsList;
