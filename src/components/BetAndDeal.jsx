import BetSection from "./BetSection";
import DealSection from "./DealSection";

const BetAndDeal = ({ bet, setBet, gameMode, deal }) => {
	return (
		<div id="bet-deal-container" className="flex">
			<BetSection bet={bet} setBet={setBet} />
			<DealSection gameMode={gameMode} deal={deal} />
		</div>
	);
};

export default BetAndDeal;
