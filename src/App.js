import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Geometry from "./pages/Geometry";
import Statistics from "./pages/Statistics";

import MobileNav from "./components/MobileNav";
import TopicsNav from "./components/TopicsNav";
import GeometryNav from "./components/geometry/GeometryNav";

function App() {
	const [geometry, setGeometry] = useState("acuted triangle");

	const handleGeometryComponent = (newTopic) => {
		setGeometry(newTopic);
	};

	return (
		<BrowserRouter>
			<MobileNav />
			<GeometryNav topic={geometry} topicChange={handleGeometryComponent} />
			<TopicsNav />
			<div id="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						render={(props) => <Geometry {...props} topic={geometry} topicChange={handleGeometryComponent} />}
						exact
						path="/geometria"
					/>
					<Route exact path="/estadistica" component={Statistics} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
