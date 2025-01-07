import { useState } from "react";
import "./styles/App.css";
import "./styles/button.css";
import { payTableList } from "./assets/paytablelist.js";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import PaytablePage from "./pages/PaytablePage.jsx";

function App() {
	const [pageDisplay, setPageDisplay] = useState("game");
	const [payTableID, setPayTableID] = useState(0);

	const curPayTable = payTableList[payTableID];

	/**
	 * STATE
	 * pageDisplay
	 * Paytable
	 *
	 */

	return (
		<div>
			<Layout>
				{"game" === pageDisplay ? (
					<Main
						showPayTables={() => setPageDisplay("paytable")}
						curPayTable={curPayTable}
					/>
				) : (
					<PaytablePage
						showGame={() => setPageDisplay("game")}
						setPayTable={setPayTableID}
						payTableID={payTableID}
					/>
				)}
			</Layout>
		</div>
	);
}

export default App;
