import React, { useRef } from "react";
import styled from "styled-components";

let idValue = 0;

function Card({ children }) {
	return <CardContainer>{children}</CardContainer>;
}

const CardContainer = styled.div`
	background-color: var(--fond);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 0 auto;
	max-width: 400px;
	padding: 20px;
	width: 100%;

	img {
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1)) opacity(0.9);
		margin: 0 auto;
		padding: 0 20px 20px;
		width: 100%;
	}
`;

const Title = styled.h2`
	color: var(--special-text);
	font: bold 2rem var(--font);
	text-align: center;
	margin-bottom: 20px;
`;

const Label = styled.label`
	color: var(--light-text);
	font: bold 1.6rem var(--font);
	padding: 5px 0;
	text-align: center;

	b {
		color: var(--special-text);
	}
`;

const Input = ({ id, get, set }) => {
	const increment = () => {
		set(+get + 1);
	};

	const decrement = () => {
		if (get > 0) {
			set(+get - 1);
		}
	};

	return (
		<InputContainer>
			<input
				id={id}
				type="number"
				onChange={(e) => {
					set(e.target.value);
				}}
				value={get}
				min="0"
				pattern="^[0-9]+"
			/>
			<button className="input__increase" onClick={increment}>
				+
			</button>
			<button className="input__decrease" onClick={decrement}>
				-
			</button>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	display: flex;
	height: 40px;
	position: relative;
	margin-bottom: 20px;

	&:focus-within input {
		border-color: var(--special-text);
		z-index: 1;
	}

	input {
		background-color: var(--fond);
		border: 1px solid var(--light-text);
		border-radius: 0;
		caret-color: var(--text);
		color: var(--text);
		font: bold 2rem var(--font);
		height: 100%;
		margin-right: 20px;
		padding: 5px;
		width: 100%;
	}

	.input__increase,
	.input__decrease {
		background-color: var(--fond);
		border: 1px solid var(--light-text);
		border-radius: 0;
		color: var(--text);
		cursor: pointer;
		font: bold 1.8rem/15px var(--font);
		height: 20px;
		position: absolute;
		right: 0;
		text-align: center;
		transition: all 0.2s ease-in-out;
		width: 20px;

		&:hover,
		&:focus,
		&:active {
			border-color: var(--special-text);
			color: var(--special-text);
		}
	}

	.input__increase {
		top: 0;
	}

	.input__decrease {
		bottom: 0;
		font-size: 2.2rem;
	}
`;

const Select = ({ id, get, set }) => {
	const units = ["mm", "cm", "m", "km"];

	return (
		<SelectContainer>
			<label htmlFor={id}>Unidades:</label>
			<input
				list="units"
				id={id}
				onChange={(e) => {
					set(e.target.value);
				}}
				value={get}
			/>
			<datalist id="units">
				{units.map((unit) => (
					<option key={unit} value={unit} />
				))}
			</datalist>
		</SelectContainer>
	);
};

const Coupon = ({ id, get, set }) => {
	const coupons = [10, 20, 30, 40, 50, 60, 70, 80, 90];

	return (
		<SelectContainer>
			<label htmlFor={id}>Cupones:</label>
			<input
				list="coupon"
				id={id}
				onChange={(e) => {
					set(e.target.value.replace(/[^0-9]/g, ""));
				}}
			/>
			<datalist id="coupon">
				{coupons.map((coupon) => (
					<option key={coupon} value={`-${coupon}%`} />
				))}
			</datalist>
		</SelectContainer>
	);
};

const SelectContainer = styled.div`
	height: 30px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;

	label {
		color: var(--text);
		font: bold 1.6rem var(--font);
		padding: 5px 20px 5px 5px;
	}

	input {
		background-color: var(--fond);
		border: 1px solid var(--text);
		caret-color: var(--text);
		color: var(--text);
		font: bold 2rem var(--font);
		height: 100%;
		padding: 5px;
		width: 100%;

		&:focus,
		&:active,
		&:hover {
			border: 1px solid var(--special-text);
			color: var(--special-text);
		}
	}
`;

const AddValue = ({ id, get, set, array }) => {
	const input = useRef(0);

	const increment = () => {
		set(+get + 1);
	};

	const decrement = () => {
		set(+get - 1);
	};

	const addData = () => {
		if (input.current.value) {
			idValue += 1;

			array((prev) => [...prev, { id: idValue, value: input.current.value }]);
			set("");
		}
	};

	return (
		<AddValueContainer>
			<InputContainer>
				<input
					id={id}
					type="number"
					onChange={(e) => {
						set(e.target.value);
					}}
					value={get}
					ref={input}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							addData();
						}
					}}
				/>
				<button className="input__increase" onClick={increment}>
					+
				</button>
				<button className="input__decrease" onClick={decrement}>
					-
				</button>
			</InputContainer>
			{/* Desactivate button when it is falsy */}
			<Add onClick={addData} disabled={!get || +get === 0}>
				+
			</Add>
		</AddValueContainer>
	);
};

const AddValueContainer = styled.div`
	display: grid;
	height: 40px;
	gap: 10px;
	grid-template-columns: 1fr 40px;
	margin-bottom: 20px;
	place-items: top center;
	position: relative;
`;

const Add = styled.button`
	background-color: var(--fond);
	border: 2px solid var(--text);
	border-radius: 8px;
	box-size: border-box;
	color: var(--text);
	cursor: pointer;
	font: bold 3rem/36px var(--font);
	height: 40px;
	padding: 0 10px;
	right: 0;
	text-align: center;
	transition: all 0.2s ease-in-out;

	&:hover,
	&:focus,
	&:active {
		border-color: var(--special-text);
		color: var(--special-text);
	}

	&:active {
		transform: translateY(3px);
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.7;
	}
`;

const Result = styled.p`
	color: var(--light-text);
	font: bold 1.6rem/2.5rem var(--font);

	b {
		color: var(--special-text);
	}

	del {
		color: var(--text);
	}

	strong {
		color: var(--success-text);
	}
`;

const Alert = styled.p`
	color: var(--error-text);
	font: bold 1.6rem/2.5rem var(--font);
`;

export default Card;

export { Card, Title, Label, Input, Select, Result, Alert, Coupon, AddValue };
