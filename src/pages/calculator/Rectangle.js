import React, { useState, useEffect } from "react";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Select, Result, Alert } from "../../components/Card";

import rectangleImg from "../../assets/svg/rectangle.svg";

export default function Rectangle() {
	const [rectangleBase, setRectangleBase] = useState("");
	const [rectangleHeight, setRectangleHeight] = useState("");
	const [rectangleUnit, setRectangleUnit] = useState("cm");
	const [rectanglePerimeter, setRectanglePerimeter] = useState("");
	const [rectangleArea, setRectangleArea] = useState("");
	const [notRectangle, setNotRectangle] = useState("");

	useEffect(() => {
		if (!rectangleBase || !rectangleHeight) {
			setNotRectangle("");
			setRectanglePerimeter("");
			setRectangleArea("");
		} else if (rectangleBase === rectangleHeight) {
			setNotRectangle("Ese es un cuadrado");
			setRectanglePerimeter("");
			setRectangleArea("");
		} else {
			setNotRectangle("");
			setRectanglePerimeter(Number(rectangleBase) * 2 + Number(rectangleHeight) * 2);
			setRectangleArea(rectangleBase * rectangleHeight);
		}
	}, [rectangleBase, rectangleHeight]);

	return (
		<Main>
			<Card>
				<Title>Rectángulo</Title>
				<img src={rectangleImg} alt="Triángulo escaleno" />
				<Label htmlFor="rectangleBase">Base</Label>
				<Input id="rectangleBase" get={rectangleBase} set={setRectangleBase} type="number" />
				<Label htmlFor="rectangleHeight">Altura</Label>
				<Input id="rectangleHeight" get={rectangleHeight} set={setRectangleHeight} type="number" />
				<Select id="scaleneUnit" get={rectangleUnit} set={setRectangleUnit} />
				<Alert>{notRectangle}</Alert>
				<Result>
					<b>Perímetro:</b>
					{` ${rectanglePerimeter}${
						rectanglePerimeter && rectangleUnit
							? " " + rectangleUnit
							: rectanglePerimeter && !rectangleUnit
							? " u"
							: ""
					}`}
				</Result>
				<Result>
					<b>Área:</b>
					{` ${rectangleArea}${
						rectangleArea && rectangleUnit
							? " " + rectangleUnit + "²"
							: rectangleArea && !rectangleUnit
							? " u²"
							: ""
					}`}
				</Result>
			</Card>
		</Main>
	);
}
