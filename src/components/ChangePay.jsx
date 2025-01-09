import * as constants from "../assets/constants";

const ChangePay = ({ gameState: { gameMode }, showPayTables }) => {
	let payClass, onPayClick;
	if (gameMode === constants.DEAL) {
		payClass = "";
		onPayClick = showPayTables;
	} else {
		payClass = "disable";
		onPayClick = () => {};
	}
	return (
		<div id="pay" onClick={onPayClick} className={payClass}>
			<img id="paytables-img" src="graphics/money.png" alt="Change Paytable" />
		</div>
	);
};

export default ChangePay;
