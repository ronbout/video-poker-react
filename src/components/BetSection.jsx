import BetButton from "./BetButton";

const BetSection = () => {
	return (
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
				<BetButton amt={5} />
				<BetButton amt={-5} />
			</div>
		</div>
	);
};

export default BetSection;
