import ChangePay from "./ChangePay";
import Credits from "./Credits";
const Money = ({ gameState, showPayTables }) => {
	return (
		<div id="credits-pay-container" className="flex">
			<Credits />
			<ChangePay gameState={gameState} showPayTables={showPayTables} />
		</div>
	);
};

export default Money;
