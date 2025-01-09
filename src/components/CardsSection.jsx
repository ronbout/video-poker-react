// import { Deck } from "../assets/Deck";
import * as constants from "../assets/constants";
import CardDisplay from "./CardDisplay";

const CardsSection = ({
	gameMode,
	hand,
	holdCards,
	setHoldCards,
	displayBar,
}) => {
	const renderCards = () => {
		return (
			<>
				{hand.map((card, index) => {
					return (
						<CardDisplay
							gameMode={gameMode}
							card={card}
							index={index}
							key={index}
							holdCards={holdCards}
							setHoldCards={setHoldCards}
						/>
					);
				})}
			</>
		);
	};

	/**
	 * lousy way to do this, but following original css.
	 * who wrote that??  ;)
	 */
	const visibilityStyle = gameMode === constants.DEAL ? "visible" : "hidden";

	return (
		<>
			<div id="cards" className="flex">
				{renderCards()}
			</div>
			<div id="over" style={{ visibility: visibilityStyle }}>
				{displayBar}
			</div>
		</>
	);
};

export default CardsSection;
