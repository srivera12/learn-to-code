import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './CardTable.css';

const shuffleURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawnCards: [],
    };
    this.drawCard = this.drawCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(shuffleURL);
    this.setState({ deck: deck.data });
  }
  async drawCard() {
    let deckID = this.state.deck.deck_id;
    try {
      let drawURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
      let drawnCard = await axios.get(drawURL);
      if (!drawnCard.data.success) {
        throw new Error('No cards remaining!');
      }
      let card = drawnCard.data.cards[0];
      this.setState((st) => ({
        drawnCards: [...st.drawnCards, { id: card.code, img: card.image, name: `${card.value} OF ${card.suit}` }],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawnCards.map((card) => <Card key={card.id} img={card.img} name={card.name} />);
    return (
      <div className="CardTable">
        <h1 className="CardTable-title">Card Dealer</h1>
        <h2 className="CardTable-title subtitle">A Simple Demo Made In React</h2>
        <button className="CardTable-btn" onClick={this.drawCard}>
          GIMMIE A CARD!!
        </button>
        <div className="CardTable-card-area">{cards}</div>
      </div>
    );
  }
}

export default CardTable;
