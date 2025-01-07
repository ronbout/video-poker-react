import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ payTableTitle, children }) => {
	return (
		<>
			<Header payTableTitle={payTableTitle} />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
