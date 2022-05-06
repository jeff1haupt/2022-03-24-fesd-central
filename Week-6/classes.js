class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    playCard() {
        return this.hand.pop()
    }

    incrementScore() {
        this.score = this.score += 1;
    }
} // end Player

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    describe() {
        return `${this.value} of ${this.suit}`
    }
} // end Card

class Deck {
    constructor() {
        this.cards = []
    }
    shuffleDeck() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
} // end Deck