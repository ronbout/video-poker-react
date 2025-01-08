import BetSection from "./BetSection";
import DealSection from "./DealSection";

const BetAndDeal = ({ bet, setBet, gameMode }) => {
	return (
		<div id="bet-deal-container" className="flex">
			<BetSection bet={bet} setBet={setBet} />
			<DealSection gameMode={gameMode} />
		</div>
	);
};

export default BetAndDeal;
