import _ from 'lodash';

class Card {

  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  outputCard() {
    console.log(`${this.rank} of ${this.suit}`);
  }
}

class Deck {
  constructor() {
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
    this.cards = [];

    ranks.forEach( (rank) => {
      suits.forEach( (suit) => {
        const card = new Card(rank, suit);
        this.cards.push(card);
      });
    });
  }
  deal() {
    return this.cards.shift();
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
  }
}

const deck = new Deck();
deck.shuffle();
const card = deck.deal();
card.outputCard();