import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Main from "../../components/Main";
import { Card, Title, Label, Result, AddValue } from "../../components/Card";

// import ModeImg from "../../assets/svg/mode.svg";

export default function Mode() {
	const [modeValue, setModeValue] = useState("");
	const [modeValues, setModeValues] = useState([]);
	const [modeResult, setModeResult] = useState("");

	useEffect(() => {
		if (modeValues.length > 0) {
			// Calculate the mode
			const array = modeValues.map((v) => parseInt(v.value));
			const counts = {};
			array.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
			const max = Math.max(...Object.values(counts));
			const mode = Object.keys(counts).find((key) => counts[key] === max);
			console.log(mode, max, counts);

			if (max === 1) {
				setModeResult("No hay moda");
			} else {
				const modes = Object.keys(counts).filter((key) => counts[key] === max);
				if (modes.length === 1) {
					setModeResult(`${mode}`);
				} else {
					const last = modes.pop();
					setModeResult(`${modes.join(", ")} y ${last}`);
				}
			}
		} else {
			setModeResult("");
		}
	}, [modeValues]);

	return (
		<Main>
			<Card>
				<Title>Moda</Title>
				<Label htmlFor="modeValue">Ingrese un dato</Label>
				<AddValue id="modeValue" get={modeValue} set={setModeValue} array={setModeValues} />
				<Label>
					<p>
						Datos actuales:<b> {modeValues.length}</b>
					</p>
				</Label>
				<Flex>
					{modeValues.length > 0 &&
						modeValues
							.sort((a, b) => a.value - b.value)
							.map((data, index) => (
								<Data key={data.id}>
									<input
										type="number"
										value={data.value}
										onChange={(e) => {
											setModeValues([
												...modeValues.slice(0, index),
												{ id: data.id, value: e.target.value },
												...modeValues.slice(index + 1),
											]);
										}}
									/>
									<button
										onClick={() => {
											setModeValues(modeValues.filter((value, i) => i !== index));
										}}
									>
										×
									</button>
								</Data>
							))}
				</Flex>
				<Result>
					<b>Moda{modeResult.includes("y") ? "s" : ""}: </b> {modeResult}
				</Result>
				{modeValues.length > 0 && <ClearAll onClick={() => setModeValues([])}>Borrar datos</ClearAll>}
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
