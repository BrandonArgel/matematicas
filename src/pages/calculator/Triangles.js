import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Select, Result, Alert } from "../../components/Card";

import EquilateralTriangle from "../../assets/svg/equilateralTriangle.svg";
import IsoscelesTriangle from "../../assets/svg/isoscelesTriangle.svg";
import ScaleneTriangle from "../../assets/svg/scaleneTriangle.svg";

export default function CalculatorTriangles() {
	const [equilateralSide, setEquilateralSide] = useState("");
	const [equilateralHeight, setEquilateralHeight] = useState("");
	const [equilateralUnit, setEquilateralUnit] = useState("cm");
	const [equilateralPerimeter, setEquilateralPerimeter] = useState("");
	const [equilateralArea, setEquilateralArea] = useState("");

	const [isoscelesBase, setIsoscelesBase] = useState("");
	const [isoscelesSide, setIsoscelesSide] = useState("");
	const [isoscelesHeight, setIsoscelesHeight] = useState("");
	const [isoscelesUnit, setIsoscelesUnit] = useState("cm");
	const [isoscelesPerimeter, setIsoscelesPerimeter] = useState("");
	const [isoscelesArea, setIsoscelesArea] = useState("");

	const [scaleneBase, setScaleneBase] = useState("");
	const [scaleneSideOne, setScaleneSideOne] = useState("");
	const [scaleneSideTwo, setScaleneSideTwo] = useState("");
	const [scaleneHeight, setScaleneHeight] = useState("");
	const [scaleneUnit, setScaleneUnit] = useState("cm");
	const [scalenePerimeter, setScalenePerimeter] = useState("");
	const [scaleneArea, setScaleneArea] = useState("");
	const [notScalene, setNotScalene] = useState("");

	useEffect(() => {
		if (!equilateralSide) {
			setEquilateralPerimeter("");
			setEquilateralArea("");
			setEquilateralHeight("");
		} else {
			const perimeter = +equilateralSide * 3;
			const area = (+equilateralSide * +equilateralSide * Math.sqrt(3)) / 4;
			const height = (+equilateralSide * Math.sqrt(3)) / 2;

			if (Number.isInteger(perimeter)) {
				setEquilateralPerimeter(perimeter);
			} else {
				setEquilateralPerimeter(perimeter.toFixed(2));
			}
			if (Number.isInteger(area)) {
				setEquilateralArea(area);
			} else {
				setEquilateralArea(area.toFixed(2));
			}
			if (Number.isInteger(area)) {
				setEquilateralArea(area);
			} else {
				setEquilateralArea(area.toFixed(2));
			}
			if (Number.isInteger(height)) {
				setEquilateralHeight(height);
			} else {
				setEquilateralHeight(height.toFixed(2));
			}
		}
	}, [equilateralSide, equilateralUnit]);

	useEffect(() => {
		if (!isoscelesBase || !isoscelesHeight) {
			setIsoscelesPerimeter("");
			setIsoscelesArea("");
		} else if (isoscelesBase && isoscelesHeight) {
			const side = Math.sqrt(isoscelesHeight ** 2 + isoscelesBase ** 2);
			const perimeter = +(2 * side + isoscelesBase);
			const area = +((+isoscelesBase * +isoscelesHeight) / 2);

			if (Number.isInteger(perimeter)) {
				setIsoscelesPerimeter(perimeter);
			} else {
				setIsoscelesPerimeter(perimeter.toFixed(2));
			}
			if (Number.isInteger(area)) {
				setIsoscelesArea(area);
			} else {
				setIsoscelesArea(area.toFixed(2));
			}
			if (Number.isInteger(side)) {
				setIsoscelesSide(side);
			} else {
				setIsoscelesSide(side.toFixed(2));
			}
		}
	}, [isoscelesBase, isoscelesHeight, isoscelesUnit, isoscelesSide]);

	useEffect(() => {
		if (!scaleneBase || !scaleneHeight) {
			setNotScalene("");
			setScaleneArea("");
		} else if (!scaleneBase || !scaleneSideOne || !scaleneSideTwo) {
			setNotScalene("");
			setScalenePerimeter("");
		} else if (scaleneBase === scaleneSideOne && scaleneSideOne === scaleneSideTwo) {
			setScaleneArea("");
			setScalenePerimeter("");
			setNotScalene("Ese es un triángulo Equilátero");
		} else if (
			scaleneBase === scaleneSideOne ||
			scaleneSideOne === scaleneSideTwo ||
			scaleneSideTwo === scaleneBase
		) {
			setScaleneArea("");
			setScalenePerimeter("");
			setNotScalene("Ese es un triángulo Isósceles");
		} else {
			setNotScalene("");
			const perimeter = +(scaleneBase + scaleneSideOne + scaleneSideTwo);
			const area = +((+scaleneBase * +scaleneHeight) / 2);

			if (Number.isInteger(perimeter)) {
				setScalenePerimeter(perimeter);
			} else {
				setScalenePerimeter(perimeter.toFixed(2));
			}
			if (Number.isInteger(area)) {
				setScaleneArea(area);
			} else {
				setScaleneArea(area.toFixed(2));
			}
		}
	}, [scaleneBase, scaleneHeight, scaleneUnit, scaleneSideOne, scaleneSideTwo, scalenePerimeter]);

	return (
		<Main>
			<Container>
				<Card>
					<Title>Triángulo Equilátero</Title>
					<img src={EquilateralTriangle} alt="Triángulo equilátero" />
					<Label htmlFor="equilateral">Ingresa el lado del triángulo</Label>
					<Input id="equilateral" get={equilateralSide} set={setEquilateralSide} type="number" />
					<Select id="equilateralUnit" get={equilateralUnit} set={setEquilateralUnit} />
					<Result>
						<b>Perímetro:</b>
						{` ${equilateralPerimeter}${
							equilateralPerimeter && equilateralUnit
								? " " + equilateralUnit
								: equilateralSide && !equilateralUnit
								? " u"
								: ""
						}`}
					</Result>
					<Result>
						<b>Área:</b>
						{` ${equilateralArea}${
							equilateralArea && equilateralUnit
								? " " + equilateralUnit + "²"
								: equilateralArea && !equilateralUnit
								? " u²"
								: ""
						}`}
					</Result>
					<Result>
						<b>Altura:</b>
						{` ${equilateralHeight}${
							equilateralHeight && equilateralUnit
								? " " + equilateralUnit
								: equilateralHeight && !equilateralUnit
								? " u"
								: ""
						}`}
					</Result>
				</Card>
				<Card>
					<Title>Triángulo Escaleno</Title>
					<img src={ScaleneTriangle} alt="Triángulo escaleno" />
					<Label htmlFor="scaleneBase">Ingresa la base del triángulo</Label>
					<Input id="scaleneBase" get={scaleneBase} set={setScaleneBase} type="number" />
					<Label htmlFor="scaleneSideOne">Ingresa el primer lado</Label>
					<Input id="scaleneSideOne" get={scaleneSideOne} set={setScaleneSideOne} type="number" />
					<Label htmlFor="scaleneSideTwo">Ingresa el segundo lado</Label>
					<Input id="scaleneSideTwo" get={scaleneSideTwo} set={setScaleneSideTwo} type="number" />
					<Label htmlFor="scaleneHeight">Ingresa la altura</Label>
					<Input id="scaleneHeight" get={scaleneHeight} set={setScaleneHeight} type="number" />
					<Select id="scaleneUnit" get={scaleneUnit} set={setScaleneUnit} />
					<Alert>{notScalene}</Alert>
					<Result>
						<b>Perímetro:</b>
						{` ${scalenePerimeter}${
							scalenePerimeter && scaleneUnit && !notScalene
								? " " + scaleneUnit
								: scalenePerimeter && !scaleneUnit
								? " u"
								: ""
						}`}
					</Result>
					<Result>
						<b>Área:</b>
						{` ${scaleneArea}${
							scaleneArea && scaleneUnit && !notScalene
								? " " + scaleneUnit + "²"
								: scaleneArea && !scaleneUnit
								? " u²"
								: ""
						}`}
					</Result>
				</Card>
				<Card>
					<Title>Triángulo Isósceles</Title>
					<img src={IsoscelesTriangle} alt="Triángulo isósceles" />
					<Label htmlFor="isoscelesBase">Ingresa la base del triángulo</Label>
					<Input id="isoscelesBase" get={isoscelesBase} set={setIsoscelesBase} type="number" />
					<Label htmlFor="isoscelesHeight">Ingresa la altura</Label>
					<Input id="isoscelesHeight" get={isoscelesHeight} set={setIsoscelesHeight} type="number" />
					<Select id="isoscelesUnit" get={isoscelesUnit} set={setIsoscelesUnit} />
					<Result>
						<b>Perímetro:</b>
						{` ${isoscelesPerimeter}${
							isoscelesPerimeter && isoscelesUnit
								? " " + isoscelesUnit
								: isoscelesPerimeter && !isoscelesUnit
								? " u"
								: ""
						}`}
					</Result>
					<Result>
						<b>Área:</b>
						{` ${isoscelesArea}${
							isoscelesArea && isoscelesUnit
								? " " + isoscelesUnit + "²"
								: isoscelesArea && !isoscelesUnit
								? " u²"
								: ""
						}`}
					</Result>
					<Result>
						<b>Lado:</b>
						{` ${isoscelesSide}${
							isoscelesSide && isoscelesUnit
								? " " + isoscelesUnit
								: isoscelesSide && !isoscelesUnit
								? " u"
								: ""
						}`}
					</Result>
				</Card>
			</Container>
		</Main>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: masonry;
	gap: 20px;
	margin: 0 auto;
	max-width: 1200px;
	width: 100%;

	@supports (grid-template-rows: masonry;) {
		grid-template-rows: masonry;
	}

	@media (min-width: 540px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 790px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
