import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { Button as ButtonHover } from "../components/ButtonHover";
import Main from "../components/Main";

export default function NotFound() {
	const text = useRef(0);

	useEffect(() => {
		const velocity = text.current.dataset.max / 8;

		const timeoutID = setTimeout(() => {
			const counter = () => {
				// Clear timeout if component is unmounted
				if (!text.current) {
					return () => {
						clearTimeout(counter);
					};
				}

				// Also with innerHTML and innerText you can get the text content
				let max = +text.current.dataset.max,
					current = +text.current.innerText,
					increment = max / velocity;

				if (current < max) {
					text.current.innerText = parseInt(current + increment);
					setTimeout(counter, 10);
				} else {
					text.current.innerText = max;
				}
			};

			counter();
		}, 500);

		// Cancel timeout when component unmounts
		return () => {
			clearTimeout(timeoutID);
		};
	}, []);

	return (
		<Main>
			<Wrapper>
				<Title style={{ "--delay": "0" }} ref={text} data-max="404">
					0
				</Title>
				<SubTitle style={{ "--delay": "1" }}>Página no encontrada</SubTitle>
				<Button to="/" style={{ "--delay": "2" }}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Regresar al inicio
				</Button>
			</Wrapper>
		</Main>
	);
}

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 162px);
	justify-content: center;

	@keyframes appear-in {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Title = styled.h1`
	animation: appear-in 0.5s ease-in-out forwards;
	animation-delay: calc(var(--delay) * 200ms);
	color: var(--special-text);
	font: clamp(10rem, 20vw, 25rem) / 1 var(--font-futurist);
	opacity: 0;
	text-align: center;
`;

const SubTitle = styled.h2`
	animation: appear-in 0.5s ease-in-out forwards;
	animation-delay: calc(var(--delay) * 200ms);
	color: var(--light-text);
	font: clamp(3rem, 4vw, 5rem) / 1 var(--font-futurist);
	margin: 1rem 0;
	opacity: 0;
	text-align: center;
`;

const Button = styled(ButtonHover)`
	animation: appear-in 0.5s ease-in-out forwards;
	animation-delay: calc(var(--delay) * 200ms);
	font: 2rem / 1 var(--font-futurist);
	margin-top: 2rem;
	opacity: 0;
	padding: 1.5rem 2rem;
`;
