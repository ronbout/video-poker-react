const BetButton = ({ amt = 5 }) => {
	return (
		<button id="betplus" className="btn-yellow bet-btn">
			Bet {(amt > 0 ? "+" : "") + amt}
		</button>
	);
};

export default BetButton;
