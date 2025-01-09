import * as constants from "../assets/constants";
import { Deck } from "../assets/Deck";

const CardDisplay = ({ gameMode, card, index, holdCards, setHoldCards }) => {
	const handleCardClick = () => {
		if (gameMode === constants.DEAL) return;
		const newHold = [...holdCards];
		newHold[index] = !newHold[index];
		setHoldCards(newHold);
	};

	return (
		<div className="card-img-container" key={index}>
			<div className="hold-container">
				<div className="hold" id={`hold${index + 1}`}>
					{holdCards[index] ? "HOLD" : "\u00A0"}
				</div>
			</div>
			<img
				id={`card${index + 1}`}
				className="card"
				data-card={index + 1}
				src={Deck.getCardImage(card)}
				alt={Deck.getCardDesc(card)}
				title={Deck.getCardDesc(card)}
				onClick={() => handleCardClick(index)}
			/>
		</div>
	);
};

export default CardDisplay;
