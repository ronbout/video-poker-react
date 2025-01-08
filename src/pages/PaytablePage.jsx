import { useState } from "react";
import { payTableList } from "../assets/paytablelist";
import "../styles/paytable.css";

const PaytablePage = ({ showGame, setPayTableID, payTableID }) => {
	/**
	 * going to undo the orig table ID code as that permitted the header
	 * to be changed without the paytable being selected.  This makes it
	 * impossible for the user to know their current paytable, which could
	 * be useful.  It's was mostly just a test of useRef and useEffect combining
	 * to store original values.
	 */
	// const origPayTableID = useRef();
	// useEffect(() => {
	// 	if (!origPayTableID.current && origPayTableID.current !== 0) {
	// 		origPayTableID.current = payTableID;
	// 		// console.log("tst: ", origPayTableID.current);
	// 	}
	// }, [payTableID]);

	const [curPayTableID, setCurPayTableID] = useState(payTableID);

	const handleSelectPaytable = () => {
		setPayTableID(curPayTableID);
		showGame();
	};

	const handleChangePaytable = (payID) => {
		setCurPayTableID(payID);
		// setPayTableID(payID);
		// console.log(payID);
	};

	const handleCancelPaytable = () => {
		// console.log("orig: " + origPayTableID.current);
		// setPayTableID(origPayTableID.current);
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
		// console.log(payAmountArray);
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
