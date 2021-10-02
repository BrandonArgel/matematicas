import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
}
