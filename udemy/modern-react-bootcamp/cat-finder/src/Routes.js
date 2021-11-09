import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CatsList from './CatsList';
import CatDetails from './CatDetails';

class Routes extends Component {
  render() {
    const getCat = (props) => {
      let name = props.match.params.name;
      let currentCat = this.props.cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
      if (currentCat) {
        return <CatDetails {...props} cat={currentCat} />;
      } else {
        return <Redirect to="/cats" />;
      }
    };
    return (
      <div>
        <Switch>
          <Route exact path="/cats" render={() => <CatsList cats={this.props.cats} />} />
          <Route exact path="/cats/:name" render={getCat} />
          <Redirect to="/cats" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
