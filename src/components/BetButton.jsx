import * as constants from "../assets/constants";
const BetButton = ({ bet, setBet, amt = 5 }) => {
	return (
		<button
			id="betplus"
			className="btn-yellow bet-btn"
			onClick={() => setBet((prev) => prev + amt)}
			disabled={bet + amt < 0 || bet + amt > constants.MAX_BET}
		>
			Bet {(amt > 0 ? "+" : "") + amt}
		</button>
	);
};

export default BetButton;
