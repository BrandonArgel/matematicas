import React, { useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Main application component
import Home from "./pages";

// Pages of Algebra
import Algebra from "./pages/algebra";

// Pages of Analysis
import Analysis from "./pages/analysis";

// Pages of Arithemetics
import Aritmetics from "./pages/aritmetics";

// Pages of Geometry
import Geometry from "./pages/geometry";
import GeometryTriangles from "./pages/geometry/Triangles";
import GeometrySquare from "./pages/geometry/Square";
import GeometryRectangle from "./pages/geometry/Rectangle";
import GeometryCircle from "./pages/geometry/Circle";

// Pages of Probability and Statistics
import ProbabilityAndStatistics from "./pages/probability_and_statistics";

// Extra pages
import Extras from "./pages/extras";

import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";

export default function App() {
	const mainRef = useRef(null);

	return (
		<BrowserRouter>
			<Header main={mainRef} />
			<Switch>
				<Route exact path="/" render={() => <Home main={mainRef} />} />
				<Route extact path="/algebra" render={() => <Algebra main={mainRef} />} />
				<Route extact path="/analisis" render={() => <Analysis main={mainRef} />} />
				<Route extact path="/aritmetica" render={() => <Aritmetics main={mainRef} />} />
				<Route exact path="/geometria" render={() => <Geometry main={mainRef} />} />
				<Route exact path="/geometria/triangulos" render={() => <GeometryTriangles main={mainRef} />} />
				<Route exact path="/geometria/cuadrado" render={() => <GeometrySquare main={mainRef} />} />
				<Route exact path="/geometria/rectangulo" render={() => <GeometryRectangle main={mainRef} />} />
				<Route exact path="/geometria/circulo" render={() => <GeometryCircle main={mainRef} />} />
				<Route
					extact
					path="/probabilidad-y-estadistica"
					render={() => <ProbabilityAndStatistics main={mainRef} />}
				/>
				<Route extact path="/extras" component={Extras} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

// Trigonometry
// Calculus
