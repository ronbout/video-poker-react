import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";

const Game = () => {
	return (
		<div id="cards-container" className="flex">
			<OddsContainer />
			<CardsSection />
			<Message />
		</div>
	);
};

export default Game;
