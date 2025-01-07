import { useState } from "react";
import { payTableList } from "../assets/paytablelist";
import "../styles/paytable.css";

const PaytablePage = ({ showGame, setPayTableID, payTableID }) => {
	// console.log(payTableList);
	// for (const paytable of payTableList) {
	// 	console.log(paytable.getId());
	// 	console.log(payTableID);
	// }
	// console.log(payTableList[payTableID].getDispTable());

	const [curPayTableID, setCurPayTableID] = useState(payTableID);

	const origPayTableID = payTableID;

	const handleSelectPaytable = () => {
		setPayTableID(curPayTableID);
		showGame();
	};

	const handleChangePaytable = (payID) => {
		setCurPayTableID(payID);
		console.log(payID);
	};

	const handleCancelPaytable = () => {
		setPayTableID(origPayTableID);
		showGame();
	};

	const renderPayTableNames = () => {
		return payTableList.map((paytable) => (
			<h3
				className={
					paytable.getId() === curPayTableID
						? "paytable-selected"
						: "paytable-item"
				}
				id={`pay-${paytable.getId() + 1}`}
				key={paytable.getId()}
				onClick={() => handleChangePaytable(paytable.getId())}
			>
				{paytable.getDesc()}
			</h3>
		));
	};

	const renderPayTableAmounts = () => {
		const payAmountList = payTableList[curPayTableID].getDispTable();
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
				<div className="paytable-list">{renderPayTableNames()}</div>
				<div className="paydesc">
					<h2 style={{ textAlign: "center" }}>
						<span>{payTableList[curPayTableID].getDesc()} Payouts</span>
					</h2>
					<table className="paytable" style={{ paddingTop: "10px" }}>
						<thead>
							<tr>
								<th className="hand">Hand</th>
								<th>Pays</th>
							</tr>
						</thead>
						<tbody>{renderPayTableAmounts()}</tbody>
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
				<button
					id="pay-cancel"
					className="btn btn-cancel"
					onClick={handleCancelPaytable}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default PaytablePage;
