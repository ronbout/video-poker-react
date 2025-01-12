export class PayTableClass {
	// the payTable is composed of payouts inside
	// array(s) with the following layout:
	// array [ High Card,
	//  			 Pair - array [ 2 - Ace ],
	//				 Two Pair,
	//				 Three of Kind,
	//				 Straight,
	//				 Flush,
	//				 Full House,
	//				 Four of Kind - array [ 2 - Ace ],
	//				 Straight Flush (non royal),
	//				 Royal Flush,
	//	]
	// it is not a name:pair object because using
	// arrays lets me correlate card numbers to
	// array indices in the calcPayout routine

	#id;
	#desc;
	#payTable;
	#dispTable;

	set id(id) {
		this.#id = id;
	}

	get id() {
		return this.#id;
	}

	set desc(desc) {
		this.#desc = desc;
	}

	get desc() {
		return this.#desc;
	}

	set payTable(table) {
		this.#payTable = table;
	}

	get payTable() {
		return this.#payTable;
	}

	set dispTable(disp) {
		this.#dispTable = disp;
	}

	get dispTable() {
		return this.#dispTable;
	}
}
