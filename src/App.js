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
					<Route exact path="/" component={Home} />

					<Route exact path="/algebra" component={Algebra} />

					<Route exact path="/analisis" component={Analysis} />

					<Route exact path="/aritmetica" component={Aritmetics} />

					<Route exact path="/geometria" component={Geometry} />
					<Route exact path="/geometria/triangulos" component={GeometryTriangles} />
					<Route exact path="/geometria/cuadrado" component={GeometrySquare} />
					<Route exact path="/geometria/rectangulo" component={GeometryRectangle} />
					<Route exact path="/geometria/circulo" component={GeometryCircle} />

					<Route exact path="/probabilidad" component={Probability} />

					<Route exact path="/estadistica" component={Statistics} />

					<Route exact path="/calculadora" component={Calculator} />
					<Route exact path="/calculadora/geometria/triangulos" component={CalculatorTriangles} />
					<Route exact path="/calculadora/geometria/cuadrado" component={CalculatorSquare} />
					<Route exact path="/calculadora/geometria/rectangulo" component={CalculatorRectangle} />
					<Route exact path="/calculadora/geometria/circulo" component={CalculatorCircle} />
					<Route exact path="/calculadora/estadistica/promedio" component={CalculatorMean} />
					<Route exact path="/calculadora/estadistica/mediana" component={CalculatorMedian} />
					<Route exact path="/calculadora/estadistica/moda" component={CalculatorMode} />
					<Route exact path="/calculadora/finanzas/descuentos" component={CalculatorDiscounts} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

// Trigonometry
// Calculus
