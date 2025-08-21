import * as constants from "./constants.js";
import { Deck } from "./Deck2022.js";

export class PokerHand {
	#hand;
	#handRank;
	#sortedHand;

	constructor(hand) {
		this.#hand = hand;
		this.#handRank = new Array(constants.HAND_SIZE);
		this.#sortedHand = new Array(constants.HAND_SIZE);
	}

	// Static method for comparing ranks
	static compareRanks(card1, card2) {
		return Deck.getRank(card2) - Deck.getRank(card1);
	}

	// Getters and setters
	get hand() {
		return this.#hand;
	}

	set hand(hand) {
		this.#hand = hand;
	}

	get handRank() {
		this.#setHandRank();
		return this.#handRank;
	}

	get sortedHand() {
		return this.#sortedHand;
	}

	// Private methods
	#isStraight(ranks) {
		// Check for wheel
		if (
			ranks[0] === constants.ACE &&
			ranks[1] === 5 &&
			ranks[2] === 4 &&
			ranks[3] === 3 &&
			ranks[4] === 2
		) {
			return true;
		}

		// Check for all other straights
		return (
			ranks[0] === ranks[1] + 1 &&
			ranks[1] === ranks[2] + 1 &&
			ranks[2] === ranks[3] + 1 &&
			ranks[3] === ranks[4] + 1
		);
	}

	#isFlush() {
		const suits = this.#sortedHand.map((card) => Deck.getSuit(card));
		return suits.every((suit) => suit === suits[0]);
	}

	#isFour(ranks) {
		return (
			(ranks[0] === ranks[1] &&
				ranks[1] === ranks[2] &&
				ranks[2] === ranks[3]) ||
			(ranks[1] === ranks[2] && ranks[2] === ranks[3] && ranks[3] === ranks[4])
		);
	}

	#isFull(ranks) {
		return (
			(ranks[0] === ranks[1] &&
				ranks[1] === ranks[2] &&
				ranks[3] === ranks[4]) ||
			(ranks[0] === ranks[1] && ranks[2] === ranks[3] && ranks[3] === ranks[4])
		);
	}

	#isThree(ranks) {
		return (
			(ranks[0] === ranks[1] && ranks[1] === ranks[2]) ||
			(ranks[1] === ranks[2] && ranks[2] === ranks[3]) ||
			(ranks[2] === ranks[3] && ranks[3] === ranks[4])
		);
	}

	#isTwoPair(ranks) {
		return (
			(ranks[0] === ranks[1] && ranks[2] === ranks[3]) ||
			(ranks[0] === ranks[1] && ranks[3] === ranks[4]) ||
			(ranks[1] === ranks[2] && ranks[3] === ranks[4])
		);
	}

	#isPair(ranks) {
		return (
			ranks[0] === ranks[1] ||
			ranks[1] === ranks[2] ||
			ranks[2] === ranks[3] ||
			ranks[3] === ranks[4]
		);
	}

	#loadHandRank(ranks) {
		const handType = this.#handRank[5];
		let tmp;

		switch (handType) {
			case constants.STRT_FLUSH:
			case constants.STRAIGHT:
				// Check for A 5 4 3 2, swap to 5 4 3 2 A
				if (ranks[0] === constants.ACE && ranks[1] === 5) {
					tmp = this.#sortedHand[0];
					for (let i = 0; i < 4; i++) {
						this.#sortedHand[i] = this.#sortedHand[i + 1];
					}
					this.#sortedHand[4] = tmp;
				}
				break;

			case constants.PAIR:
				if (ranks[0] !== ranks[1]) {
					if (ranks[1] === ranks[2]) {
						// A Q Q 8 7  -->  Q Q A 8 7
						tmp = this.#sortedHand[0];
						this.#sortedHand[0] = this.#sortedHand[2];
						this.#sortedHand[2] = tmp;
					} else if (ranks[2] === ranks[3]) {
						// A Q 8 8 7  -->  8 8 A Q 7
						tmp = this.#sortedHand[0];
						this.#sortedHand[0] = this.#sortedHand[3];
						this.#sortedHand[3] = this.#sortedHand[1];
						this.#sortedHand[1] = this.#sortedHand[2];
						this.#sortedHand[2] = tmp;
					} else {
						// A Q 8 7 7  -->  7 7 A Q 8
						tmp = this.#sortedHand[4];
						this.#sortedHand[4] = this.#sortedHand[2];
						this.#sortedHand[2] = this.#sortedHand[0];
						this.#sortedHand[0] = this.#sortedHand[3];
						this.#sortedHand[3] = this.#sortedHand[1];
						this.#sortedHand[1] = tmp;
					}
				}
				break;

			case constants.TWO_PAIR:
				if (ranks[0] !== ranks[1]) {
					tmp = this.#sortedHand[0];
					for (let i = 0; i < 4; i++) {
						this.#sortedHand[i] = this.#sortedHand[i + 1];
					}
					this.#sortedHand[4] = tmp;
				} else if (ranks[2] !== ranks[3]) {
					tmp = this.#sortedHand[2];
					this.#sortedHand[2] = this.#sortedHand[4];
					this.#sortedHand[4] = tmp;
				}
				break;

			case constants.THREE_KIND:
				if (ranks[2] === ranks[3]) {
					tmp = this.#sortedHand[0];
					this.#sortedHand[0] = this.#sortedHand[3];
					this.#sortedHand[3] = tmp;
					/* fix bug with original code comparing ranks, which is always !== as it wasn't swapped */
					if (this.#sortedHand[0] !== this.#sortedHand[1]) {
						tmp = this.#sortedHand[1];
						this.#sortedHand[1] = this.#sortedHand[4];
						this.#sortedHand[4] = tmp;
					}
				}
				break;

			case constants.FULL_HOUSE:
				if (ranks[1] !== ranks[2]) {
					tmp = this.#sortedHand[0];
					this.#sortedHand[0] = this.#sortedHand[4];
					this.#sortedHand[4] = tmp;
					tmp = this.#sortedHand[1];
					this.#sortedHand[1] = this.#sortedHand[3];
					this.#sortedHand[3] = tmp;
				}
				break;

			case constants.FOUR_KIND:
				if (ranks[0] !== ranks[1]) {
					tmp = this.#sortedHand[0];
					this.#sortedHand[0] = this.#sortedHand[4];
					this.#sortedHand[4] = tmp;
				}
				break;
		}

		// Reverse order into handRank
		for (let i = 4; i >= 0; i--) {
			this.#handRank[i] = this.#sortedHand[4 - i];
		}
	}

	#setHandRank() {
		let strtFlg = false;
		let flushFlg = false;

		// Copy and sort hand
		this.#sortedHand = [...this.#hand];
		this.#sortedHand.sort(PokerHand.compareRanks);

		const ranks = this.#sortedHand.map((card) => Deck.getRank(card));

		strtFlg = this.#isStraight(ranks);
		flushFlg = this.#isFlush();

		this.#handRank[5] = constants.HIGH_CARD; // default hand rank

		if (strtFlg || flushFlg) {
			if (strtFlg && flushFlg) {
				this.#handRank[5] =
					ranks[4] === 10 ? constants.ROYALFLUSH : constants.STRT_FLUSH;
			} else {
				this.#handRank[5] = strtFlg ? constants.STRAIGHT : constants.FLUSH;
			}
		} else if (this.#isFour(ranks)) {
			this.#handRank[5] = constants.FOUR_KIND;
		} else if (this.#isFull(ranks)) {
			this.#handRank[5] = constants.FULL_HOUSE;
		} else if (this.#isThree(ranks)) {
			this.#handRank[5] = constants.THREE_KIND;
		} else if (this.#isTwoPair(ranks)) {
			this.#handRank[5] = constants.TWO_PAIR;
		} else if (this.#isPair(ranks)) {
			this.#handRank[5] = constants.PAIR;
		}

		this.#loadHandRank(ranks);
	}

	// Public method
	convertHandRank() {
		let retVal = 0;

		for (let i = 0; i < constants.HAND_SIZE; i++) {
			retVal += Deck.getRank(this.#handRank[i]) * 16 ** i;
		}

		retVal += this.#handRank[5] * 16 ** 5;

		return retVal;
	}
}
