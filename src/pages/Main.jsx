import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";
import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";
import { PokerHand } from "../assets/PokerHand";
import { useState } from "react";

const Main = ({ showPayTables, curPayTable }) => {
	const [bank, setBank] = useState(constants.STARTING_BANK);
	const [bet, setBet] = useState(constants.START_BET);
	const [holdCards, setHoldCards] = useState([0, 0, 0, 0, 0]);
	const [gameState, setGameState] = useState({
		gameMode: constants.DEAL,
		hand: [0, 1, 2, 3, 4],
		displayBar: constants.DISP_BAR,
		userMessage: constants.msgs.init,
	});

	const curDeck = new Deck();
	const pokerHand = new PokerHand();

	const logHand = (hand) => {
		hand.forEach((card) => {
			console.log(Deck.getCardDesc(card));
		});
	};

	const calcPayout = (handRank) => {
		let payout;
		let payStructure = curPayTable.getPayTable();

		switch (handRank[5]) {
			case constants.HIGH_CARD:
			case constants.TWO_PAIR:
			case constants.THREE_KIND:
			case constants.STRAIGHT:
			case constants.FLUSH:
			case constants.FULL_HOUSE:
			case constants.STRT_FLUSH:
			case constants.ROYALFLUSH:
				payout = payStructure[handRank[5]] * bet;
				break;
			case constants.FOUR_KIND:
			case constants.PAIR:
				// check rank of high card and pull pay from array
				payout = payStructure[handRank[5]][Deck.getRank(handRank[4]) - 2] * bet;
		}
		return payout;
	};

	const deal = () => {
		curDeck.shuffle();
		const newHand = curDeck.deal();
		setGameState((prev) => ({
			displayBar: prev.displayBar,
			gameMode: constants.DRAW,
			hand: newHand,
			userMessage: constants.msgs.draw,
		}));
		setBank((prev) => prev - bet);
	};

	const draw = () => {
		const newHand = [...gameState.hand];
		holdCards.forEach((holdCard, i) => {
			if (!holdCard) {
				// replace new card by dealing another off deck
				const tmpCard = curDeck.deal(1)[0];
				newHand[i] = tmpCard;
			}
		});

		setHoldCards([0, 0, 0, 0, 0]);
		// evaluate hand
		console.log("hand: ", newHand);
		logHand(newHand);
		pokerHand.setHand(newHand);
		const handRank = pokerHand.getHandRank();
		console.log("hand rank: ", handRank);
		const payout = calcPayout(handRank);
		console.log("payout: ", payout);
		console.log("hand rank: ", constants.HAND_DESCS[handRank[5]]);
		setBank((prev) => {
			console.log("prev bank: ", prev);
			return prev + payout;
		});
		setGameState({
			displayBar: payout
				? constants.HAND_DESCS[handRank[5]]
				: constants.DISP_BAR,
			userMessage:
				payout > 0
					? constants.msgs.won.replace("%%_amt_%%", payout)
					: constants.msgs.lost,
			gameMode: constants.DEAL,
			hand: newHand,
		});
	};

	return (
		<main id="game-container">
			<Money bank={bank} gameState={gameState} showPayTables={showPayTables} />
			<Game
				gameState={gameState}
				holdCards={holdCards}
				setHoldCards={setHoldCards}
			/>
			<BetAndDeal
				gameState={gameState}
				bet={bet}
				setBet={setBet}
				deal={deal}
				draw={draw}
			/>
		</main>
	);
};

export default Main;
