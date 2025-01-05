const BetAndDeal = () => {
	return (
		<div id="bet-deal-container" className="flex">
			<div id="bet-container" className="flex">
				<div id="bet-amt" className="flex">
					<div id="bet-label">BET:</div>
					<div id="bet-display">
						<input
							type="text"
							name="bet"
							id="bet"
							size="4"
							value="5"
							readOnly="readonly"
						/>
					</div>
				</div>
				<div id="bet-change" className="flex">
					<button id="betplus" className="btn-yellow bet-btn">
						Bet +5
					</button>
					<button id="betminus" className="btn-yellow bet-btn">
						Bet -5
					</button>
				</div>
			</div>
			<div id="deal-container" className="flex">
				<div>
					<button id="deal-btn" className="btn-yellow btn-large">
						Deal
					</button>
					<button id="draw-btn" className="btn-yellow btn-large">
						Draw
					</button>
				</div>
			</div>
		</div>
	);
};

export default BetAndDeal;
