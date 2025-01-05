const OddsContainer = () => {
	return (
		<div id="odds-container" className="flex">
			<div id="odds-btn">
				<button id="calc-odds" className="btn-darkgrey" disabled>
					Calc Odds/EV
				</button>
			</div>
			<div id="odds-results">
				<input type="text" id="ev" value="0.00" size="10" disabled />
			</div>
			<div id="odds-help-container">
				<img src="graphics/help-circle.svg" id="odds-help" alt="odds help" />
			</div>
		</div>
	);
};

export default OddsContainer;
