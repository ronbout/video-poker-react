import { PayTableClass } from "./PayTableClass2022.js";
export let payTableList = new Array();

// Jacks or Better
let tmpTable = new PayTableClass();
tmpTable.id = 0;
tmpTable.desc = "Jacks or Better";
tmpTable.payTable = [
	0,
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	2,
	3,
	4,
	6,
	9,
	[25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
	50,
	800,
];
tmpTable.dispTable = {
	"ROYAL FLUSH": 800,
	"STRAIGHT FLUSH": 50,
	"FOUR OF A KIND": 25,
	"FULL HOUSE": 9,
	FLUSH: 6,
	STRAIGHT: 4,
	"THREE OF A KIND": 3,
	"TWO PAIR": 2,
	"JACKS OR BETTER": 1,
};
payTableList.push(tmpTable);

// Bonus Poker
tmpTable = new PayTableClass();
tmpTable.id = 1;
tmpTable.desc = "Bonus Poker";
tmpTable.payTable = [
	0,
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	2,
	3,
	4,
	5,
	8,
	[40, 40, 40, 25, 25, 25, 25, 25, 25, 25, 25, 25, 80],
	50,
	800,
];
tmpTable.dispTable = {
	"ROYAL FLUSH": 800,
	"STRAIGHT FLUSH": 50,
	"FOUR OF A KIND (Aces)": 80,
	"FOUR OF A KIND (2, 3, 4)": 40,
	"FOUR OF A KIND (5 - King)": 25,
	"FULL HOUSE": 8,
	FLUSH: 5,
	STRAIGHT: 4,
	"THREE OF A KIND": 3,
	"TWO PAIR": 2,
	"JACKS OR BETTER": 1,
};
payTableList.push(tmpTable);

//  Double Bonus Poker
tmpTable = new PayTableClass();
tmpTable.id = 2;
tmpTable.desc = "Double Bonus Poker";
tmpTable.payTable = [
	0,
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	1,
	3,
	5,
	7,
	10,
	[80, 80, 80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 80],
	50,
	800,
];
tmpTable.dispTable = {
	"ROYAL FLUSH": 800,
	"STRAIGHT FLUSH": 50,
	"FOUR OF A KIND (Aces)": 80,
	"FOUR OF A KIND (2, 3, 4)": 80,
	"FOUR OF A KIND (5 - King)": 50,
	"FULL HOUSE": 10,
	FLUSH: 7,
	STRAIGHT: 5,
	"THREE OF A KIND": 3,
	"TWO PAIR": 1,
	"JACKS OR BETTER": 1,
};
payTableList.push(tmpTable);

// Aces Bonus Poker
tmpTable = new PayTableClass();
tmpTable.id = 3;
tmpTable.desc = "Aces Bonus Poker";
tmpTable.payTable = [
	0,
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	1,
	3,
	4,
	5,
	8,
	[80, 80, 80, 50, 50, 50, 50, 50, 50, 50, 50, 50, 400],
	60,
	800,
];
tmpTable.dispTable = {
	"ROYAL FLUSH": 800,
	"STRAIGHT FLUSH": 60,
	"FOUR OF A KIND (Aces)": 400,
	"FOUR OF A KIND (2, 3, 4)": 80,
	"FOUR OF A KIND (5 - King)": 50,
	"FULL HOUSE": 8,
	FLUSH: 5,
	STRAIGHT: 4,
	"THREE OF A KIND": 3,
	"TWO PAIR": 1,
	"JACKS OR BETTER": 1,
};
payTableList.push(tmpTable);

// Triple Bonus Poker
tmpTable = new PayTableClass();
tmpTable.id = 4;
tmpTable.desc = "Triple Bonus Poker";
tmpTable.payTable = [
	0,
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	1,
	3,
	4,
	5,
	9,
	[120, 120, 120, 50, 50, 50, 50, 50, 50, 50, 50, 50, 240],
	100,
	800,
];
tmpTable.dispTable = {
	"ROYAL FLUSH": 800,
	"STRAIGHT FLUSH": 100,
	"FOUR OF A KIND (Aces)": 240,
	"FOUR OF A KIND (2, 3, 4)": 120,
	"FOUR OF A KIND (5 - King)": 50,
	"FULL HOUSE": 9,
	FLUSH: 5,
	STRAIGHT: 4,
	"THREE OF A KIND": 3,
	"TWO PAIR": 1,
	"JACKS OR BETTER": 1,
};
payTableList.push(tmpTable);
