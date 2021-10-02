import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Select, Result, AddValue } from "../../components/Card";

import SquareImg from "../../assets/svg/square.svg";

export default function Mean() {
	const [value, setValue] = useState("");
	const [values, setValues] = useState([]);
	const [result, setResult] = useState("");

	useEffect(() => {
		// Data is being updated correctly
		// console.log(values);

		if (values.length > 0) {
			const sum = values.reduce((a, b) => +a + +b);
			const mean = sum / values.length;

			if (Number.isInteger(mean)) {
				setResult(mean);
			} else {
				setResult(mean.toFixed(2));
			}
		} else {
			setResult("");
		}
	}, [values]);

	return (
		<Main>
			<Card>
				<Title>Media Aritmética o Promedio</Title>
				<Label htmlFor="valueData">Ingrese un dato</Label>
				<AddValue id="valueData" get={value} set={setValue} array={setValues} />
				<Label>Datos actuales:</Label>
				{values.length === 0 && <Result style={{ textAlign: "center" }}>Aún no hay datos</Result>}
				<Flex>
					{values.length !== 0 &&
						values.map((data, index) => (
							<Data key={index}>
								<input
									type="number"
									value={data}
									onChange={(e) => {
										setValues([...values.slice(0, index), e.target.value, ...values.slice(index + 1)]);
									}}
								/>
								<button
									onClick={() => {
										setValues(values.filter((value, i) => i !== index));
									}}
								>
									×
								</button>
							</Data>
						))}
				</Flex>
				<Result>
					<b>Promedio: </b> {result}
				</Result>
				{values.length > 0 && <ClearAll onClick={() => setValues([])}>Borrar datos</ClearAll>}
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
