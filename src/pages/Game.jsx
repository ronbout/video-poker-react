const Game = () => {
  return (
    <main id="game-container">
      <div id="credits-pay-container" className="flex">
        <div id="credits">
          <p>
            Credits:
            <input
              type="text"
              id="bank"
              name="bank"
              readOnly="readonly"
              size="5"
              value="1000"
            />
          </p>
        </div>
        <div id="pay">
          <img
            id="paytables-img"
            src="graphics/money.png"
            alt="Change Paytable"
          />
        </div>
      </div>

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
            <img
              src="graphics/help-circle.svg"
              id="odds-help"
              alt="odds help"
            />
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
    </main>
  );
};

export default Game;
