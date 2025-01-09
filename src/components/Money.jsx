import ChangePay from "./ChangePay";
import Credits from "./Credits";
const Money = ({ bank, gameState, showPayTables }) => {
	return (
		<div id="credits-pay-container" className="flex">
			<Credits bank={bank} />
			<ChangePay gameState={gameState} showPayTables={showPayTables} />
		</div>
	);
};

export default Money;
