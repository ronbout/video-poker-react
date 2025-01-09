import BetSection from "./BetSection";
import DealSection from "./DealSection";

const BetAndDeal = ({ gameState: { gameMode }, bet, setBet, deal, draw }) => {
	return (
		<div id="bet-deal-container" className="flex">
			<BetSection bet={bet} setBet={setBet} />
			<DealSection gameMode={gameMode} deal={deal} draw={draw} />
		</div>
	);
};

export default BetAndDeal;
