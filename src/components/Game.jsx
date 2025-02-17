import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";

const Game = ({
	gameState: { gameMode, hand, displayBar, userMessage },
	holdCards,
	setHoldCards,
	evVal,
	calcEV,
	showOddsHelp,
}) => {
	return (
		<div id="cards-container" className="flex">
			<OddsContainer
				gameMode={gameMode}
				evVal={evVal}
				calcEV={calcEV}
				showOddsHelp={showOddsHelp}
			/>
			<CardsSection
				gameMode={gameMode}
				hand={hand}
				holdCards={holdCards}
				setHoldCards={setHoldCards}
				displayBar={displayBar}
			/>
			<Message userMessage={userMessage} />
		</div>
	);
};

export default Game;
