import BetSection from "./BetSection";
import DealSection from "./DealSection";

const BetAndDeal = () => {
	return (
		<div id="bet-deal-container" className="flex">
			<BetSection />
			<DealSection />
		</div>
	);
};

export default BetAndDeal;
