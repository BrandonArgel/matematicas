import React, { useState, useEffect } from "react";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Select, Result } from "../../components/Card";

import SquareImg from "../../assets/svg/square.svg";

export default function Square() {
	const [squareSide, setSquareSide] = useState("");
	const [squareUnit, setSquareUnit] = useState("cm");
	const [squarePerimeter, setSquarePerimeter] = useState("");
	const [squareArea, setSquareArea] = useState("");

	useEffect(() => {
		if (!squareSide) {
			setSquarePerimeter("");
			setSquareArea("");
		} else {
			setSquarePerimeter(squareSide * 4);
			setSquareArea(squareSide * squareSide);
		}
	}, [squareSide]);

	return (
		<Main>
			<Card>
				<Title>Cuadrado</Title>
				<img src={SquareImg} alt="Cuadrado" />
				<Label htmlFor="squareSide">Lado</Label>
				<Input id="squareSide" get={squareSide} set={setSquareSide} type="number" />
				<Select id="scaleneUnit" get={squareUnit} set={setSquareUnit} />
				<Result>
					<b>Perímetro:</b>
					{` ${squarePerimeter}${
						squarePerimeter && squareUnit ? " " + squareUnit : squarePerimeter && !squareUnit ? " u" : ""
					}`}
				</Result>
				<Result>
					<b>Área:</b>
					{` ${squareArea}${
						squareArea && squareUnit ? " " + squareUnit + "²" : squareArea && !squareUnit ? " u²" : ""
					}`}
				</Result>
			</Card>
		</Main>
	);
}
