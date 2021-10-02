import React from "react";
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

// Pages of Probability
import Probability from "./pages/probability";

// Pages of Statistics
import Statistics from "./pages/statistics";

// Calculator pages
import Calculator from "./pages/calculator";
import CalculatorTriangles from "./pages/calculator/Triangles";
import CalculatorSquare from "./pages/calculator/Square";
import CalculatorRectangle from "./pages/calculator/Rectangle";
import CalculatorCircle from "./pages/calculator/Circle";
import CalculatorDiscounts from "./pages/calculator/Discounts";
import CalculatorMean from "./pages/calculator/Mean";
import CalculatorMedian from "./pages/calculator/Median";
import CalculatorMode from "./pages/calculator/Mode";

import NotFound from "./pages/NotFound";

// Components
import Layout from "./components/Layout";

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />

					<Route exact path="/algebra" render={(props) => <Algebra {...props} />} />

					<Route exact path="/analisis" render={(props) => <Analysis {...props} />} />

					<Route exact path="/aritmetica" render={(props) => <Aritmetics {...props} />} />

					<Route exact path="/geometria" render={(props) => <Geometry {...props} />} />
					<Route exact path="/geometria/triangulos" render={(props) => <GeometryTriangles {...props} />} />
					<Route exact path="/geometria/cuadrado" render={(props) => <GeometrySquare {...props} />} />
					<Route exact path="/geometria/rectangulo" render={(props) => <GeometryRectangle {...props} />} />
					<Route exact path="/geometria/circulo" render={(props) => <GeometryCircle {...props} />} />

					<Route exact path="/probabilidad" render={(props) => <Probability {...props} />} />

					<Route exact path="/estadistica" render={(props) => <Statistics {...props} />} />

					<Route exact path="/calculadora" render={(props) => <Calculator {...props} />} />
					<Route
						exact
						path="/calculadora/geometria/triangulos"
						render={(props) => <CalculatorTriangles {...props} />}
					/>
					<Route
						exact
						path="/calculadora/geometria/cuadrado"
						render={(props) => <CalculatorSquare {...props} />}
					/>
					<Route
						exact
						path="/calculadora/geometria/rectangulo"
						render={(props) => <CalculatorRectangle {...props} />}
					/>
					<Route
						exact
						path="/calculadora/geometria/circulo"
						render={(props) => <CalculatorCircle {...props} />}
					/>
					<Route
						exact
						path="/calculadora/estadistica/promedio"
						render={(props) => <CalculatorMean {...props} />}
					/>
					<Route
						exact
						path="/calculadora/estadistica/mediana"
						render={(props) => <CalculatorMedian {...props} />}
					/>
					<Route
						exact
						path="/calculadora/estadistica/moda"
						render={(props) => <CalculatorMode {...props} />}
					/>
					<Route
						exact
						path="/calculadora/finanzas/descuentos"
						render={(props) => <CalculatorDiscounts {...props} />}
					/>
					<Route render={(props) => <NotFound {...props} />} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

// Trigonometry
// Calculus
