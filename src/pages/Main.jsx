import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";

const Main = ({ showPayTables }) => {
	return (
		<main id="game-container">
			<Money showPayTables={showPayTables} />
			<Game />
			<BetAndDeal />
		</main>
	);
};

export default Main;
