import * as constants from "./constants";

export class Deck {
	// Static properties
	static cardImageIds = [
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"h7",
		"h8",
		"h9",
		"h10",
		"hj",
		"hq",
		"hk",
		"ha",
		"d2",
		"d3",
		"d4",
		"d5",
		"d6",
		"d7",
		"d8",
		"d9",
		"d10",
		"dj",
		"dq",
		"dk",
		"da",
		"c2",
		"c3",
		"c4",
		"c5",
		"c6",
		"c7",
		"c8",
		"c9",
		"c10",
		"cj",
		"cq",
		"ck",
		"ca",
		"s2",
		"s3",
		"s4",
		"s5",
		"s6",
		"s7",
		"s8",
		"s9",
		"s10",
		"sj",
		"sq",
		"sk",
		"sa",
	];

	static suitNames = ["Hearts", "Diamonds", "Clubs", "Spades"];

	static rankNames = [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"Jack",
		"Queen",
		"King",
		"Ace",
	];

	static imageLoc = "cards/";
	static imageExt = "png";

	// Static methods
	static getRank(cardNbr) {
		return (cardNbr % 13) + 2;
	}

	static getSuit(cardNbr) {
		return Math.floor(cardNbr / 13);
	}

	static getCardDesc(cardNbr) {
		return `${this.rankNames[this.getRank(cardNbr) - 2]} of ${
			this.suitNames[this.getSuit(cardNbr)]
		}`;
	}

	static getCardImage(cardNbr) {
		return `${this.imageLoc}${this.cardImageIds[cardNbr]}.${this.imageExt}`;
	}

	// Private instance properties
	#deckCnt = 0;
	#deck;

	constructor() {
		// Initialize deck
		this.#deck = Array.from({ length: constants.DECK_SIZE }, (_, i) => i);
		this.shuffle();
	}

	// Public instance methods
	deal(numCards = 5, updateCntFlg = true) {
		if (numCards > constants.DECK_SIZE - this.#deckCnt) {
			return false;
		}

		let tmpCnt = this.#deckCnt;
		const hand = Array.from({ length: numCards }, () => this.#deck[tmpCnt++]);

		if (updateCntFlg) {
			this.#deckCnt = tmpCnt;
		}

		return hand;
	}

	shuffle() {
		this.#deckCnt = 0;

		for (let i = constants.DECK_SIZE - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.#deck[i], this.#deck[j]] = [this.#deck[j], this.#deck[i]];
		}
	}
}
