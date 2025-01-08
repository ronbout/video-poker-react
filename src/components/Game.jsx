import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";
import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";
import { useState } from "react";

const Game = () => {
	const [bank, setBank] = useState(constants.STARTING_BANK);
	const [bet, setBet] = useState(constants.START_BET);
	const [gameMode, setGameMode] = useState(constants.DEAL);
	const [hand, setHand] = useState([0, 1, 2, 3, 4]);
	const [holdCards, setHoldCards] = useState([0, 0, 0, 0, 0]);

	const curDeck = new Deck();
	console.log(curDeck);
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
		<div id="cards-container" className="flex">
			<p>straight: {constants.HAND_DESCS[1]}</p>
			<OddsContainer />
			<CardsSection hand={hand} />
			<Message />
		</div>
	);
};

export default Game;
