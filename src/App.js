import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Geometry from "./pages/Geometry";
import Statistics from "./pages/Statistics";

import MovilNav from "./components/MovilNav";

function App() {
	return (
		<BrowserRouter>
			<MovilNav />
			<div id="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/geometria" component={Geometry} />
					<Route exact path="/estadistica" component={Statistics} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
