import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";
import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";
import { useState } from "react";

const Main = ({ showPayTables }) => {
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

	const deal = () => {
		curDeck.shuffle();
		const newHand = curDeck.deal();
		setGameState((prev) => ({
			displayBar: prev.displayBar,
			gameMode: constants.DRAW,
			hand: newHand,
			userMessage: constants.msgs.draw,
		}));
	};

	/**
	 * STATE
	 *
	 * bank
	 * game mode (bet/deal)
	 * hand
	 * hold cards [0,0,0,0,0]
	 * display bar
	 * user message
	 */
	return (
		<main id="game-container">
			<Money gameState={gameState} showPayTables={showPayTables} />
			<Game
				gameState={gameState}
				holdCards={holdCards}
				setHoldCards={setHoldCards}
			/>
			<BetAndDeal gameState={gameState} bet={bet} setBet={setBet} deal={deal} />
		</main>
	);
};

export default Main;
