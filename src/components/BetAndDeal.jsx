import BetSection from "./BetSection";
import DealSection from "./DealSection";

const BetAndDeal = ({ setBet, gameMode }) => {
	return (
		<div id="bet-deal-container" className="flex">
			<BetSection setBet={setBet} />
			<DealSection gameMode={gameMode} />
		</div>
	);
};

export default BetAndDeal;
