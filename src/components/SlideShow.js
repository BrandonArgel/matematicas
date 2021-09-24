import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as ArrowLeft } from "../assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/svg/arrow-right.svg";
import styled from "styled-components";

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "500",
	intervalo = "5000",
}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current.children.length > 0) {
			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = "none";
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener("transitionend", transicion);
			};

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener("transitionend", transicion);
		}
	}, [velocidad]);

	const anterior = () => {
		if (slideshow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = "none";
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 0);
		}
	};

	useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			// Eliminamos los intervalos
			slideshow.current.addEventListener("mouseenter", () => {
				clearInterval(intervaloSlideshow.current);
			});

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener("mouseleave", () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
			{controles && (
				<Controles>
					<Boton onClick={anterior}>
						<ArrowLeft />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<ArrowRight />
					</Boton>
				</Controles>
			)}
		</ContenedorPrincipal>
	);
};

const ContenedorPrincipal = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	position: relative;
	overflow: hidden;
	width: 100%;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: 0.3s ease all;
	z-index: 1;
	position: relative;
	img {
		width: 100%;
		vertical-align: top;
	}

	@media (min-width: 425px) {
		min-width: 50%;
	}

	@media (min-width: 768px) {
		min-width: 33.33333%;
	}

	@media (min-width: 1024px) {
		min-width: 25%;
	}
`;

const TextoSlide = styled.div`
	background: ${(props) => (props.backgroundColor ? props.backgroundColor : "rgba(0,0,0,.3)")};
	background: ${(props) =>
		props.backgroundColor
			? `linear-gradient(0deg, ${props.backgroundColor} 0%, rgba(0, 0, 0, 0) 100%)`
			: `linear-gradient(0deg, rgba(1, 1, 1, 1) 0%, rgba(0, 0, 0, 0) 100%)`};
	bottom: 0;
	color: ${(props) => (props.textColor ? props.textColor : "#fff")};
	font: 1.6rem/1 var(--font);
	padding: 10px 60px;
	position: absolute;
	text-align: center;
	width: 100%;
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: rgba(0, 0, 0, 0);
	border: none;
	cursor: pointer;
	display: flex;
	height: 100%;
	outline: none;
	position: absolute;
	text-align: center;
	transition: 0.3s ease all;

	&:hover {
		${(props) =>
			props.derecho
				? "background: rgb(0, 0, 0); background: linear-gradient(-90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);"
				: "background: rgb(0, 0, 0); background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);"}
	}

	svg path {
		stroke: ${(props) => (props.color ? props.color : "#fff")};
	}

	${(props) =>
		props.derecho
			? "right: 0; justify-content: flex-end; align-items: center;"
			: "left: 0; justify-content: flex-start; align-items: center;"}
`;

export { Slideshow, Slide, TextoSlide };
