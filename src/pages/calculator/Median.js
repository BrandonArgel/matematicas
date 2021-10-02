import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Main from "../../components/Main";
import { Card, Title, Label, Result, AddValue } from "../../components/Card";

// import MedianImg from "../../assets/svg/median.svg";

export default function Median() {
	const [medianValue, setMedianValue] = useState("");
	const [medianValues, setMedianValues] = useState([]);
	const [medianResult, setMedianResult] = useState("");

	useEffect(() => {
		if (medianValues.length > 0) {
			if (medianValues.length % 2 === 0) {
				const median =
					(+medianValues[medianValues.length / 2].value + +medianValues[medianValues.length / 2 - 1].value) /
					2;
				setMedianResult(median);
				// console.log("even");
			} else {
				setMedianResult(+medianValues[Math.floor(medianValues.length / 2)].value);
			}
		} else {
			setMedianResult("");
		}
	}, [medianValues]);

	return (
		<Main>
			<Card>
				<Title>Mediana</Title>
				<Label htmlFor="medianValue">Ingrese un dato</Label>
				<AddValue id="medianValue" get={medianValue} set={setMedianValue} array={setMedianValues} />
				<Label>
					<p>
						Datos actuales:<b> {medianValues.length}</b>
					</p>
				</Label>
				<Flex>
					{medianValues.length > 0 &&
						medianValues
							.sort((a, b) => a.value - b.value)
							.map((data, index) => (
								<Data key={data.id}>
									<input
										type="number"
										value={data.value}
										onChange={(e) => {
											setMedianValues([
												...medianValues.slice(0, index),
												{ id: data.id, value: e.target.value },
												...medianValues.slice(index + 1),
											]);
										}}
									/>
									<button
										onClick={() => {
											setMedianValues(medianValues.filter((value, i) => i !== index));
										}}
									>
										×
									</button>
								</Data>
							))}
				</Flex>
				<Result>
					<b>Mediana: </b> {medianResult}
				</Result>
				{medianValues.length > 0 && <ClearAll onClick={() => setMedianValues([])}>Borrar datos</ClearAll>}
			</Card>
		</Main>
	);
}

const Flex = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: 20px;
	width: 100%;
`;

const Data = styled.div`
	color: var(--dark-text);
	font: bold 1.6rem/100% var(--font);
	margin: 5px;
	position: relative;
	transition: all 0.3s;

	input {
		background-color: var(--fond);
		border: 1px solid var(--light-text);
		color: var(--light-text);
		font: bold 1.6rem/100% var(--font);
		margin: 0;
		padding: 0.5rem;
		width: 100%;

		&:focus {
			border: 1px solid var(--special-text);
		}
	}

	button {
		background-color: var(--error-text);
		border: none;
		border-radius: 0;
		color: var(--light-text);
		cursor: pointer;
		font: bold 1.4rem/10px var(--font);
		height: 15px;
		position: absolute;
		right: -5px;
		text-align: center;
		transition: all 0.3s;
		top: -5px;
		width: 15px;

		&:hover {
			transform: scale(1.2);
		}
	}
`;

const ClearAll = styled.button`
	background-color: var(--error-text);
	border: none;
	border-radius: 7px;
	color: white;
	cursor: pointer;
	font: bold 1.4rem/10px var(--font);
	height: 30px;
	margin: 10px auto;
	max-width: 120px;
	transition: all 0.3s;
	width: 100%;

	&:hover,
	&:focus {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(1.1) translateY(3px);
	}
`;
