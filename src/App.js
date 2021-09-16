import React, { useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Geometry from "./pages/Geometry";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";

export default function App() {
	const mainRef = useRef(null);

	return (
		<BrowserRouter>
			<Header main={mainRef} />
			<Switch>
				<Route exact path="/" render={() => <Home main={mainRef} />} />
				<Route exact path="/geometria" render={() => <Geometry main={mainRef} />} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
