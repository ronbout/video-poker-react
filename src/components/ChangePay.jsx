const ChangePay = ({ showPayTables }) => {
	return (
		<div id="pay" onClick={showPayTables}>
			<img id="paytables-img" src="graphics/money.png" alt="Change Paytable" />
		</div>
	);
};

export default ChangePay;
