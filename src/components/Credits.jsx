const credits = ({ bank }) => {
	return (
		<div id="credits">
			<p>
				Credits:&nbsp;
				<input
					type="text"
					id="bank"
					name="bank"
					readOnly="readonly"
					size="5"
					value={bank}
				/>
			</p>
		</div>
	);
};

export default credits;
