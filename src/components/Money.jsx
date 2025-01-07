import ChangePay from "./ChangePay";
import Credits from "./Credits";
const Money = ({ showPayTables }) => {
	return (
		<div id="credits-pay-container" className="flex">
			<Credits />
			<ChangePay showPayTables={showPayTables} />
		</div>
	);
};

export default Money;
