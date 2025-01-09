import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";
import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";
import { useState } from "react";

const Main = ({ showPayTables }) => {
	const [bank, setBank] = useState(constants.STARTING_BANK);
	const [bet, setBet] = useState(constants.START_BET);
	const [gameMode, setGameMode] = useState(constants.DEAL);
	const [hand, setHand] = useState([0, 1, 2, 3, 4]);
	const [holdCards, setHoldCards] = useState([0, 0, 0, 0, 0]);
	const [displayBar, setDisplayBar] = useState(constants.DISP_BAR);
	const [userMessage, setUserMessage] = useState(constants.msgs.init);

	const curDeck = new Deck();

	const deal = () => {
		curDeck.shuffle();
		const newHand = curDeck.deal();
		setHand(newHand);
		setGameMode(constants.DRAW);
		setUserMessage(constants.msgs.draw);
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
	 *
	 */
	return (
		<main id="game-container">
			<Money showPayTables={showPayTables} />
			<Game
				gameMode={gameMode}
				hand={hand}
				holdCards={holdCards}
				setHoldCards={setHoldCards}
				displayBar={displayBar}
				userMessage={userMessage}
			/>
			<BetAndDeal bet={bet} setBet={setBet} gameMode={gameMode} deal={deal} />
		</main>
	);
};

export default Main;
