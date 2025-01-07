import { payTableList } from "../assets/paytablelist";
import "../styles/paytable.css";

const PaytablePage = ({ showGame, setPayTable, payTableID }) => {
	// console.log(payTableList);
	// for (const paytable of payTableList) {
	// 	console.log(paytable.getId());
	// 	console.log(payTableID);
	// }
	// console.log(payTableList[payTableID].getDispTable());

	const handleSelectPaytable = () => {
		console.log("select paytable");
		showGame();
	};

	const renderPayAmounts = () => {
		const payAmountList = payTableList[payTableID].getDispTable();
		const payAmountArray = Object.keys(payAmountList);
		console.log(payAmountArray);
		return payAmountArray.map((payType) => (
			<tr key={payType}>
				<td className="paytable-name">{payType}</td>
				<td className="paytable-value">{payAmountList[payType]}</td>
			</tr>
		));
	};

	return (
		<div id="paytable-page">
			<div className="paytables-container">
				<div className="paytable-list">
					{payTableList.map((paytable) => (
						<h3
							className={
								paytable.getId() === payTableID
									? "paytable-selected"
									: "paytable-item"
							}
							id={`pay-${paytable.getId() + 1}`}
							key={paytable.getId()}
						>
							{paytable.getDesc()}
						</h3>
					))}
					{/*
					<h3 className="paytable-selected" data-pay="0" id="pay-1">
						Jacks or Better
					</h3>
					<h3 className="paytable-item" data-pay="1" id="pay-2">
						Bonus Poker
					</h3>
					<h3 className="paytable-item" data-pay="2" id="pay-3">
						Double Bonus Poker
					</h3>
					<h3 className="paytable-item" data-pay="3" id="pay-4">
						Aces Bonus Poker
					</h3>
					<h3 className="paytable-item" data-pay="4" id="pay-5">
						Triple Bonus Poker
					</h3>
					*/}
				</div>
				<div className="paydesc">
					<table className="paytable">
						<thead>
							<tr>
								<th className="hand">Hand</th>
								<th>Pays</th>
							</tr>
						</thead>
						<tbody>
							{renderPayAmounts()}
							{/*
							<tr>
								<td className="paytable-name">ROYAL FLUSH</td>
								<td className="paytable-value">800</td>
							</tr>
							<tr>
								<td className="paytable-name">STRAIGHT FLUSH</td>
								<td className="paytable-value">50</td>
							</tr>
							<tr>
								<td className="paytable-name">FOUR OF A KIND</td>
								<td className="paytable-value">25</td>
							</tr>
							<tr>
								<td className="paytable-name">FULL HOUSE</td>
								<td className="paytable-value">9</td>
							</tr>
							<tr>
								<td className="paytable-name">FLUSH</td>
								<td className="paytable-value">6</td>
							</tr>
							<tr>
								<td className="paytable-name">STRAIGHT</td>
								<td className="paytable-value">4</td>
							</tr>
							<tr>
								<td className="paytable-name">THREE OF A KIND</td>
								<td className="paytable-value">3</td>
							</tr>
							<tr>
								<td className="paytable-name">TWO PAIR</td>
								<td className="paytable-value">2</td>
							</tr>
							<tr>
								<td className="paytable-name">JACKS OR BETTER</td>
								<td className="paytable-value">1</td>
							</tr>
							*/}
						</tbody>
					</table>
				</div>
			</div>
			<div id="paytable-btns">
				<button
					id="pay-submit"
					className="btn btn-submit"
					onClick={handleSelectPaytable}
				>
					Select
				</button>
				<button id="pay-cancel" className="btn btn-cancel" onClick={showGame}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default PaytablePage;
