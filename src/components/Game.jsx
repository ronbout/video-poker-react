import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";

const Game = ({
	gameState: { gameMode, hand, displayBar, userMessage },
	holdCards,
	setHoldCards,
}) => {
	return (
		<div id="cards-container" className="flex">
			<OddsContainer />
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
