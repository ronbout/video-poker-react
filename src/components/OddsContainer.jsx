import * as constants from "../assets/constants";
const OddsContainer = ({ gameMode, evVal, calcEV, showOddsHelp }) => {
	return (
		<div id="odds-container" className="flex">
			<div id="odds-btn">
				<button
					id="calc-odds"
					className="btn-darkgrey"
					disabled={gameMode === constants.DEAL}
					onClick={calcEV}
				>
					Calc Odds/EV
				</button>
			</div>
			<div id="odds-results">
				<input type="text" id="ev" value={evVal} size="10" disabled />
			</div>
			<div id="odds-help-container">
				<img
					src="graphics/help-circle.svg"
					id="odds-help"
					alt="odds help"
					title={constants.msgs.odds}
					onClick={showOddsHelp}
				/>
			</div>
		</div>
	);
};

export default OddsContainer;
