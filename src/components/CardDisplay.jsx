import { Deck } from "../assets/Deck";

const CardDisplay = ({ card, index }) => {
	return (
		<div className="card-img-container" key={index}>
			<div className="hold-container">
				<div className="hold" id={`hold${index + 1}`}>
					&nbsp;
				</div>
			</div>
			<img
				id={`card${index + 1}`}
				className="card"
				data-card={index + 1}
				src={Deck.getCardImage(card)}
				alt={Deck.getCardDesc(card)}
				title={Deck.getCardDesc(card)}
			/>
		</div>
	);
};

export default CardDisplay;
