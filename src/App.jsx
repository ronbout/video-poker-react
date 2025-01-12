import { useState } from "react";
import "./styles/App.css";
import "./styles/button.css";
import { payTableList } from "./assets/paytablelist.js";
import * as constants from "./assets/constants";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import PaytablePage from "./pages/PaytablePage.jsx";

function App() {
	const [pageDisplay, setPageDisplay] = useState("game");
	const [payTableID, setPayTableID] = useState(0);
	const [bank, setBank] = useState(constants.STARTING_BANK);

	const curPayTable = payTableList[payTableID];

	/**
	 * STATE
	 * pageDisplay
	 * Paytable ID
	 *
	 */

	return (
		<div>
			<Layout payTableTitle={curPayTable.desc}>
				{"game" === pageDisplay ? (
					<Main
						showPayTables={() => setPageDisplay("paytable")}
						curPayTable={curPayTable}
						bank={bank}
						setBank={setBank}
					/>
				) : (
					<PaytablePage
						showGame={() => setPageDisplay("game")}
						setPayTableID={setPayTableID}
						payTableID={payTableID}
					/>
				)}
			</Layout>
		</div>
	);
}

export default App;
