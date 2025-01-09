import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";

const Game = ({ gameMode, hand, displayBar, userMessage }) => {
	return (
		<div id="cards-container" className="flex">
			<OddsContainer />
			<CardsSection gameMode={gameMode} hand={hand} displayBar={displayBar} />
			<Message userMessage={userMessage} />
		</div>
	);
};

export default Game;
