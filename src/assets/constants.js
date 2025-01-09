// export CONSTANTS
export const DECK_SIZE = 52;
export const HAND_SIZE = 5;
export const STARTING_BANK = 1000;
export const START_BET = 5;
export const MAX_BET = 30; // 100 for real, just testing limits
export const DEAL = 0;
export const DRAW = 1;
export const DISP_BAR = "GAME OVER";

export const HIGH_CARD = 0;
export const PAIR = 1;
export const TWO_PAIR = 2;
export const THREE_KIND = 3;
export const STRAIGHT = 4;
export const FLUSH = 5;
export const FULL_HOUSE = 6;
export const FOUR_KIND = 7;
export const STRT_FLUSH = 8;
export const ROYALFLUSH = 9;

export const ACE = 14;
export const KING = 13;
export const QUEEN = 12;
export const JACK = 11;

export const HEART = 0;
export const DIAMOND = 1;
export const CLUB = 2;
export const SPADE = 3;

export const HAND_DESCS = [
	"HIGH CARD",
	"ONE PAIR",
	"TWO PAIR",
	"THREE OF A KIND",
	"STRAIGHT",
	"FLUSH",
	"FULL HOUSE",
	"FOUR OF A KIND",
	"STRAIGHT FLUSH",
	"ROYAL FLUSH",
];

export const msgs = {
	init: 'Bet +/- to set Bet amount.   "DEAL" to play.',
	draw: 'Click on Cards to hold.   "DRAW" to draw.',
	lost: "Sorry. You lost.",
	won: "You won $%%_amt_%%!",
	odds:
		"The Calc Odds/EV button looks at every combination of hands \n" +
		"possible given the cards that you are holding and determines \n" +
		"an average payout based on your bet size.\n" +
		"\nNote:  Running the odds calculator with no cards held may take \n" +
		"a few moments (1,533,939 combos).  The EV for such a calc is in \n" +
		"the 0.32-0.34 range ($1.6-1.7 per $5 bet)",
};
