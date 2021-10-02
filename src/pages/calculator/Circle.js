import React, { useState, useEffect } from "react";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Select, Result } from "../../components/Card";

import CircleImg from "../../assets/svg/circle.svg";

export default function Circle() {
	const [circleRadius, setCircleRadius] = useState("");
	const [circleUnit, setCircleUnit] = useState("cm");
	const [circlePerimeter, setCirclePerimeter] = useState("");
	const [circleArea, setCircleArea] = useState("");

	useEffect(() => {
		if (!circleRadius) {
			setCirclePerimeter("");
			setCircleArea("");
		} else {
			setCirclePerimeter((circleRadius * 2 * Math.PI).toFixed(2));
			setCircleArea((circleRadius * circleRadius * Math.PI).toFixed(2));
		}
	}, [circleRadius]);

	return (
		<Main>
			<Card>
				<Title>Círculo</Title>
				<img src={CircleImg} alt="Círculo" />
				<Label htmlFor="circleRadius">Radio</Label>
				<Input id="circleRadius" get={circleRadius} set={setCircleRadius} type="number" />
				<Select id="scaleneUnit" get={circleUnit} set={setCircleUnit} />
				<Result>
					<b>Perímetro:</b>
					{` ${circlePerimeter}${
						circlePerimeter && circleUnit ? " " + circleUnit : circlePerimeter && !circleUnit ? " u" : ""
					}`}
				</Result>
				<Result>
					<b>Área:</b>
					{` ${circleArea}${
						circleArea && circleUnit ? " " + circleUnit + "²" : circleArea && !circleUnit ? " u²" : ""
					}`}
				</Result>
			</Card>
		</Main>
	);
}
