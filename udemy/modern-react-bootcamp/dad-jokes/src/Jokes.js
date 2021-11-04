import React, { Component } from 'react';
import axios from 'axios';
import JokeRow from './JokeRow';
import './Jokes.css';

const API_URL = 'https://icanhazdadjoke.com/';

class Jokes extends Component {
  static defaultProps = {
    jokeNum: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false,
    };
    this.displayedJokes = new Set(this.state.jokes.map((joke) => joke.id));
    this.getJokes = this.getJokes.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }
  async getJokes() {
    try {
      let jokesArr = [];
      while (jokesArr.length < this.props.jokeNum) {
        let joke = await axios.get(API_URL, { headers: { Accept: 'application/json' } });
        if (this.displayedJokes.has(joke.data.id)) {
          console.log('Found duplicate joke');
        } else {
          jokesArr.push({ id: joke.data.id, joke: joke.data.joke, rating: 0 });
          this.displayedJokes.add(joke.data.id);
        }
      }
      this.setState(
        (st) => ({
          loading: false,
          jokes: [...st.jokes, ...jokesArr],
        }),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  handleRating(id, change) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((joke) => (joke.id === id ? { ...joke, rating: joke.rating + change } : joke)),
      }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="Jokes-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="Jokes-title">Loading...</h1>
        </div>
      );
    } else {
      const sortedJokes = [...this.state.jokes].sort((a, b) => b.rating - a.rating);
      return (
        <div className="Jokes">
          <div className="Jokes-sidebar">
            <h1 className="Jokes-title">
              <span>Dad</span> Jokes!
            </h1>
            <img
              src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
              alt="laughing emoji"
            />
            <button className="Jokes-btn" onClick={this.handleClick}>
              Fetch Jokes
            </button>
          </div>
          <div className="Jokes-jokelist">
            {sortedJokes.map((joke) => (
              <JokeRow
                key={joke.id}
                joke={joke.joke}
                rating={joke.rating}
                upVote={() => {
                  this.handleRating(joke.id, 1);
                }}
                downVote={() => {
                  this.handleRating(joke.id, -1);
                }}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Jokes;
