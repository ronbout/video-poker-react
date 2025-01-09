import * as constants from "../assets/constants";
const DealSection = ({ gameMode, deal, draw }) => {
	return (
		<div id="deal-container" className="flex">
			<div>
				{gameMode === constants.DEAL ? (
					<button id="deal-btn" className="btn-yellow btn-large" onClick={deal}>
						Deal
					</button>
				) : (
					<button id="draw-btn" className="btn-yellow btn-large" onClick={draw}>
						Draw
					</button>
				)}
			</div>
		</div>
	);
};

export default DealSection;
