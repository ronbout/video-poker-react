import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";
import * as constants from "../assets/constants";
import { rlb } from "../assets/rlb-lib";
import { Deck } from "../assets/Deck2022";
import { PokerHand } from "../assets/PokerHand2022";
import { useEffect, useRef, useState } from "react";

const Main = ({ showPayTables, curPayTable, bank, setBank }) => {
	const [bet, setBet] = useState(constants.START_BET);
	const [holdCards, setHoldCards] = useState([0, 0, 0, 0, 0]);
	const [evVal, setEvVal] = useState("0.00");
	const [gameState, setGameState] = useState({
		gameMode: constants.DEAL,
		hand: [0, 1, 2, 3, 4],
		displayBar: constants.DISP_BAR,
		userMessage: constants.msgs.init,
	});
	const curDeck = useRef();

	useEffect(() => {
		if (!curDeck.current) {
			curDeck.current = new Deck();
		}
	}, []);
	const pokerHand = new PokerHand();
	new Deck();

	const logHand = (hand) => {
		hand.forEach((card) => {
			console.log(card);
			console.log(Deck.getCardDesc(card));
		});
	};

	const calcPayout = (handRank) => {
		let payout;
		let payStructure = curPayTable.payTable;

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

	const calcEV = () => {
		setEvVal("Calc...");
		let totalPayout = 0;
		let comboCnt = 0;

		// make array of just hold cards
		let tmpHoldCards = gameState.hand.filter(function (card, ndx) {
			return holdCards[ndx];
		});
		// create array of combos using nCk
		let tmpDeck = curDeck.current.deal(47, false);
		let k = constants.HAND_SIZE - tmpHoldCards.length;

		let comboFn = function (combo) {
			comboCnt++;
			// if (!(comboCnt % 10000)) {
			// 	console.log("cnt: " + comboCnt);
			// }
			let tmpHand = tmpHoldCards.concat(combo);
			// calc return for this combo
			let tmpPokerHand = new PokerHand(tmpHand);
			let handRank = tmpPokerHand.handRank;
			let comboPayout = calcPayout(handRank);
			totalPayout += comboPayout;
		};

		//console.log('k: ' + k);
		/**
		 * where the combinatorial magic happens
		 */
		rlb.nCk(tmpDeck, k, false, comboFn);

		let returnEv = totalPayout / comboCnt;
		setEvVal(returnEv.toFixed(2));
	};

	const deal = () => {
		curDeck.current.shuffle();
		// const tst = curDeck.current.deal(52, false);
		// console.log("tst: ", tst);
		const newHand = curDeck.current.deal();
		// const newHand = [8, 3, 49, 51, 38];
		setGameState((prev) => ({
			displayBar: prev.displayBar,
			gameMode: constants.DRAW,
			hand: newHand,
			userMessage: constants.msgs.draw,
		}));
		setBank((prev) => prev - bet);
		logHand(newHand);
	};

	const draw = () => {
		const newHand = [...gameState.hand];
		holdCards.forEach((holdCard, i) => {
			if (!holdCard) {
				// replace new card by dealing another off deck
				const tmpCard = curDeck.current.deal(1)[0];
				newHand[i] = tmpCard;
			}
		});

		setHoldCards([0, 0, 0, 0, 0]);
		// evaluate hand
		console.log("hand: ", newHand);
		logHand(newHand);
		pokerHand.hand = newHand;
		const handRank = pokerHand.handRank;
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
		setEvVal("0.00");
	};

	return (
		<main id="game-container">
			<Money bank={bank} gameState={gameState} showPayTables={showPayTables} />
			<Game
				gameState={gameState}
				holdCards={holdCards}
				setHoldCards={setHoldCards}
				evVal={evVal}
				calcEV={calcEV}
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
