import BetAndDeal from "../components/BetAndDeal";
import Game from "../components/Game";
import Money from "../components/Money";

const Main = () => {
	return (
		<main id="game-container">
			<Money />
			<Game />
			<BetAndDeal />
		</main>
	);
};

export default Main;
