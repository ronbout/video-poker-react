import BetButton from "./BetButton";
import * as constants from "../assets/constants";

const BetSection = ({ bet, setBet }) => {
	return (
		<div id="bet-container" className="flex">
			<div id="bet-amt" className="flex">
				<div id="bet-label">
					BET:
					<br />
					<span style={{ fontWeight: "normal", fontSize: "1em" }}>
						(max={constants.MAX_BET}){" "}
					</span>
				</div>
				<div id="bet-display">
					<input
						type="text"
						name="bet"
						id="bet"
						size="4"
						value={bet}
						readOnly="readonly"
					/>
				</div>
			</div>
			<div id="bet-change" className="flex">
				<BetButton bet={bet} setBet={setBet} amt={5} />
				<BetButton bet={bet} setBet={setBet} amt={-5} />
			</div>
		</div>
	);
};

export default BetSection;
