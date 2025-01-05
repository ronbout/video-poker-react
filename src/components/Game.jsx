const Game = () => {
	return (
		<div id="cards-container" className="flex">
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
			<div id="cards" className="flex">
				<div className="card-img-container">
					<div className="hold-container">
						<div className="hold" id="hold1">
							&nbsp;
						</div>
					</div>
					<img
						id="card1"
						className="card"
						data-card="1"
						src="cards/h2.png"
						alt="2 of Hearts"
						title="2 of Hearts"
					/>
				</div>
				<div className="card-img-container">
					<div className="hold-container">
						<div className="hold" id="hold2">
							&nbsp;
						</div>
					</div>
					<img
						id="card2"
						className="card"
						data-card="2"
						src="cards/h3.png"
						alt="3 of Hearts"
						title="3 of Hearts"
					/>
				</div>
				<div className="card-img-container">
					<div className="hold-container">
						<div className="hold" id="hold3">
							&nbsp;
						</div>
					</div>
					<img
						id="card3"
						className="card"
						data-card="3"
						src="cards/h4.png"
						alt="3 of Hearts"
						title="4 of Hearts"
					/>
				</div>
				<div className="card-img-container">
					<div className="hold-container">
						<div className="hold" id="hold4">
							&nbsp;
						</div>
					</div>
					<img
						id="card4"
						className="card"
						data-card="4"
						src="cards/h5.png"
						alt="4 of Hearts"
						title="5 of Hearts"
					/>
				</div>
				<div className="card-img-container">
					<div className="hold-container">
						<div className="hold" id="hold5">
							&nbsp;
						</div>
					</div>
					<img
						id="card5"
						className="card"
						data-card="5"
						src="cards/h6.png"
						alt="5 of Hearts"
						title="6 of Hearts"
					/>
				</div>
			</div>
			<div id="over">GAME OVER</div>
			<div id="msg">
				Bet +/- to set Bet amount. &nbsp; &apos;DEAL&apos; to play.
			</div>
		</div>
	);
};

export default Game;
