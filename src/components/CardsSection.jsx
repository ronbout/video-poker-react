// import { Deck } from "../assets/Deck";
import CardDisplay from "./CardDisplay";

const CardsSection = ({ hand }) => {
	const renderCards = () => {
		return (
			<>
				{hand.map((card, index) => {
					return <CardDisplay card={card} index={index} key={index} />;
				})}
			</>
		);
	};

	return (
		<>
			<div id="cards" className="flex">
				{renderCards()}
			</div>
			<div id="over">GAME OVER</div>
		</>
	);
};

export default CardsSection;
