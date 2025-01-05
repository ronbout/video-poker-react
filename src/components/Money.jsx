const Money = () => {
	return (
		<div id="credits-pay-container" className="flex">
			<div id="credits">
				<p>
					Credits:&nbsp;
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
	);
};

export default Money;
