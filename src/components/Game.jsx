import CardsSection from "./CardsSection";
import Message from "./Message";
import OddsContainer from "./OddsContainer";

const Game = ({ hand }) => {
	return (
		<div id="cards-container" className="flex">
			<OddsContainer />
			<CardsSection hand={hand} />
			<Message />
		</div>
	);
};

export default Game;
