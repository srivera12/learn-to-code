import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatDetails.css';

class CatDetails extends Component {
  render() {
    const { name, src, facts, age } = this.props.cat;
    return (
      <div className="CatDetails row justify-content-center mt-5 mb-5">
        <div className="col-11 col-lg-5">
          <div className="CatDetails-card card">
            <img className="card-img-top" src={src} alt={name} />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h4 className="card-subtile text-muted">{age} years(s) old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {facts.map((fact, idx) => (
                <li className="list-group-item" key={idx}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/cats" className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatDetails;
