import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";
import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";
import { useState } from "react";

const Main = ({ showPayTables }) => {
	const [bank, setBank] = useState(constants.STARTING_BANK);
	const [bet, setBet] = useState(constants.START_BET);
	const [gameMode, setGameMode] = useState(constants.DRAW);
	const [hand, setHand] = useState([0, 1, 2, 3, 4]);
	const [holdCards, setHoldCards] = useState([0, 0, 0, 0, 0]);

	const curDeck = new Deck();
	/**
	 * STATE
	 *
	 * bank
	 * bet
	 * game mode (bet/deal)
	 * hand
	 * hold cards [0,0,0,0,0]
	 *
	 *
	 */
	return (
		<main id="game-container">
			<Money showPayTables={showPayTables} />
			<Game hand={hand} />
			<BetAndDeal bet={bet} setBet={setBet} gameMode={gameMode} />
		</main>
	);
};

export default Main;
