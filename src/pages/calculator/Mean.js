import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Main from "../../components/Main";
import { Card, Title, Label, Result, AddValue } from "../../components/Card";

// import MeanImg from "../../assets/svg/mean.svg";

export default function Median() {
	const [meanValue, setMeanValue] = useState("");
	const [meanValues, setMeanValues] = useState([]);
	const [meanResult, setMeanResult] = useState("");

	const [geometricMeanValue, setGeometricMeanValue] = useState("");
	const [geometricMeanValues, setGeometricMeanValues] = useState([]);
	const [geometricMeanResult, setGeometricMeanResult] = useState("");

	const [harmonicMeanValue, setHarmonicMeanValue] = useState("");
	const [harmonicMeanValues, setHarmonicMeanValues] = useState([]);
	const [harmonicMeanResult, setHarmonicMeanResult] = useState("");

	// const [weightedMeanValue, setWeightedMeanValue] = useState("");
	// const [weightedMeanWeight, setWeightedMeanWeight] = useState("");
	// const [weightedMeanValues, setWeightedMeanValues] = useState([]);
	// const [weightedMeanResult, setWeightedMeanResult] = useState("");

	useEffect(() => {
		if (meanValues.length > 0) {
			const sum = meanValues.reduce((a, b) => a + +b.value, 0);
			const aritmeticMean = sum / meanValues.length;

			if (Number.isInteger(aritmeticMean)) {
				setMeanResult(aritmeticMean);
			} else {
				setMeanResult(aritmeticMean.toFixed(2));
			}
		} else {
			setMeanResult("");
		}
	}, [meanValues]);

	useEffect(() => {
		if (geometricMeanValues.length > 0) {
			const sum = geometricMeanValues.reduce((a, b) => a * b.value, 1);
			const geometricMean = Math.pow(sum, 1 / geometricMeanValues.length);

			if (Number.isInteger(geometricMean)) {
				setGeometricMeanResult(geometricMean);
			} else {
				setGeometricMeanResult(geometricMean.toFixed(2));
			}
		} else {
			setGeometricMeanResult("");
		}
	}, [geometricMeanValues]);

	useEffect(() => {
		if (harmonicMeanValues.length > 0) {
			const values = harmonicMeanValues.map((val) => val.value ** -1);
			console.log(values);
			const sum = values.reduce((a, b) => a + b);
			const harmonicMean = values.length / sum;

			if (Number.isInteger(harmonicMean)) {
				setHarmonicMeanResult(harmonicMean);
			} else {
				setHarmonicMeanResult(harmonicMean.toFixed(2));
			}
		} else {
			setHarmonicMeanResult("");
		}
	}, [harmonicMeanValues]);

	return (
		<Main>
			<Container>
				<Card>
					<Title>Media Aritmética</Title>
					<Label htmlFor="meanValue">Ingrese un dato</Label>
					<AddValue id="meanValue" get={meanValue} set={setMeanValue} array={setMeanValues} />
					<Label>
						<p>
							Datos actuales:<b> {meanValues.length}</b>
						</p>
					</Label>
					<Flex>
						{meanValues.length > 0 &&
							meanValues
								.sort((a, b) => a.value - b.value)
								.map((data, index) => (
									<Data key={data.id}>
										<input
											type="number"
											value={data.value}
											onChange={(e) => {
												setMeanValues([
													...meanValues.slice(0, index),
													{ id: data.id, value: e.target.value },
													...meanValues.slice(index + 1),
												]);
											}}
										/>
										<button
											onClick={() => {
												setMeanValues(meanValues.filter((value, i) => i !== index));
											}}
										>
											×
										</button>
									</Data>
								))}
					</Flex>
					<Result>
						<b>Media Aritmética: </b> {meanResult}
					</Result>
					{meanValues.length > 0 && <ClearAll onClick={() => setMeanValues([])}>Borrar datos</ClearAll>}
				</Card>
				<Card>
					<Title>Media Geométrica</Title>
					<Label htmlFor="geometricMeanValue">Ingrese un dato</Label>
					<AddValue
						id="geometricMeanValue"
						get={geometricMeanValue}
						set={setGeometricMeanValue}
						array={setGeometricMeanValues}
					/>
					<Label>
						<p>
							Datos actuales:<b> {geometricMeanValues.length}</b>
						</p>
					</Label>
					<Flex>
						{geometricMeanValues.length > 0 &&
							geometricMeanValues
								.sort((a, b) => a.value - b.value)
								.map((data, index) => (
									<Data key={data.id}>
										<input
											type="number"
											value={data.value}
											onChange={(e) => {
												setGeometricMeanValues([
													...geometricMeanValues.slice(0, index),
													{ id: data.id, value: e.target.value },
													...geometricMeanValues.slice(index + 1),
												]);
											}}
										/>
										<button
											onClick={() => {
												setGeometricMeanValues(geometricMeanValues.filter((value, i) => i !== index));
											}}
										>
											×
										</button>
									</Data>
								))}
					</Flex>
					<Result>
						<b>Media Geométrica: </b> {geometricMeanResult}
					</Result>
					{geometricMeanValues.length > 0 && (
						<ClearAll onClick={() => setGeometricMeanValues([])}>Borrar datos</ClearAll>
					)}
				</Card>
				<Card>
					<Title>Media Armónica</Title>
					<Label htmlFor="harmonicMeanValue">Ingrese un dato</Label>
					<AddValue
						id="harmonicMeanValue"
						get={harmonicMeanValue}
						set={setHarmonicMeanValue}
						array={setHarmonicMeanValues}
					/>
					<Label>
						<p>
							Datos actuales:<b> {harmonicMeanValues.length}</b>
						</p>
					</Label>
					<Flex>
						{harmonicMeanValues.length > 0 &&
							harmonicMeanValues
								.sort((a, b) => a.value - b.value)
								.map((data, index) => (
									<Data key={data.id}>
										<input
											type="number"
											value={data.value}
											onChange={(e) => {
												setHarmonicMeanValues([
													...harmonicMeanValues.slice(0, index),
													{ id: data.id, value: e.target.value },
													...harmonicMeanValues.slice(index + 1),
												]);
											}}
										/>
										<button
											onClick={() => {
												setHarmonicMeanValues(harmonicMeanValues.filter((value, i) => i !== index));
											}}
										>
											×
										</button>
									</Data>
								))}
					</Flex>
					<Result>
						<b>Media Armónica: </b> {harmonicMeanResult}
					</Result>
					{harmonicMeanValues.length > 0 && (
						<ClearAll onClick={() => setHarmonicMeanValues([])}>Borrar datos</ClearAll>
					)}
				</Card>
				{/* <Card>
					<Title>Media Ponderada</Title>
					<Label htmlFor="weightedMeanValue">Ingrese un dato</Label>
					<AddValue
						id="weightedMeanValue"
						get={weightedMeanValue}
						set={setWeightedMeanValue}
						array={setWeightedMeanValues}
					/>
					<Label>
						<p>
							Datos actuales:<b> {weightedMeanValues.length}</b>
						</p>
					</Label>
					<Flex>
						{weightedMeanValues.length > 0 &&
							weightedMeanValues
								// .sort((a, b) => a - b)
								.map((data, index) => (
									<Data key={index}>
										<input
											type="number"
											value={data}
											onChange={(e) => {
												setWeightedMeanValues([
													...weightedMeanValues.slice(0, index),
													e.target.value,
													...weightedMeanValues.slice(index + 1),
												]);
											}}
										/>
										<button
											onClick={() => {
												setWeightedMeanValues(weightedMeanValues.filter((value, i) => i !== index));
											}}
										>
											×
										</button>
									</Data>
								))}
					</Flex>
					<Result>
						<b>Media Ponderada: </b> {weightedMeanResult}
					</Result>
					{weightedMeanValues.length > 0 && (
						<ClearAll onClick={() => setWeightedMeanValues([])}>Borrar datos</ClearAll>
					)}
				</Card> */}
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

		&:hover,
		&:focus {
			transform: scale(1.2);
		}

		&:active {
			transform: scale(1.2) translateY(2px);
		}
	}
`;

const ClearAll = styled.button`
	background-color: var(--error-text);
	border: none;
	border-radius: 5px;
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
