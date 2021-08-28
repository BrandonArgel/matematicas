import React, { useState, useEffect } from "react";

import Triangle from "../../../../assets/svg/triangle.svg";

import "../../../styles/Card.css";

export default function Equilatero() {
	const [areaScalene, setAreaScalene] = useState(null);
	const [perimeterScalene, setPerimeterScalene] = useState(null);

	const calcScalene = (side) => {
		const perimeter = side * 3;

		// Declare hipotenuse and hick
		const c = side,
			a = side / 2;
		// Then calculate height
		const h = Math.sqrt(c * c - a * a);

		// Calculate area
		const area = (c * h) / 2;

		setPerimeterScalene(Math.round(perimeter));
		setAreaScalene(area.toFixed(2));
	};

	useEffect(() => {
		const tiltEffectSettings = {
			max: 25,
			perspective: 1000,
			scale: 1.1,
			speed: 500,
			easing: "cubic-bezier(.03,.98,.52,.99)",
		};

		const cards = document.querySelectorAll(".title__effect");

		cards.forEach((card) => {
			card.addEventListener("mouseenter", cardMouseEnter);
			card.addEventListener("mousemove", cardMouseMove);
			card.addEventListener("mouseleave", cardMouseLeave);
		});

		function cardMouseEnter(event) {
			setTransition(event);
		}

		function cardMouseMove(event) {
			const card = event.currentTarget;
			const cardWidth = card.offsetWidth;
			const cardHeight = card.offsetHeight;
			const centerX = card.offsetLeft + cardWidth / 2;
			const centerY = card.offsetHeight + cardHeight / 3;
			const mouseX = event.clientX - centerX;
			const mouseY = event.clientY - centerY;
			// console.log(mouseX, mouseY);
			const rotateXUncapped = +1 * ((tiltEffectSettings.max * mouseY) / (cardHeight / 2));
			const rotateYUncapped = -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));
			const rotateX =
				rotateXUncapped < -tiltEffectSettings.max
					? -tiltEffectSettings.max
					: rotateXUncapped > tiltEffectSettings.max
					? tiltEffectSettings.max
					: rotateXUncapped;
			const rotateY =
				rotateYUncapped < -tiltEffectSettings.max
					? -tiltEffectSettings.max
					: rotateYUncapped > tiltEffectSettings.max
					? tiltEffectSettings.max
					: rotateYUncapped;

			card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                          scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
		}

		function cardMouseLeave(event) {
			const card = event.currentTarget;
			card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
			setTransition(event);
		}

		function setTransition(event) {
			const card = event.currentTarget;
			clearTimeout(card.transitionTimeoutId);
			card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
			card.transitionTimeoutId = setTimeout(() => {
				card.style.transition = "";
			}, tiltEffectSettings.speed);
		}
	}, []);

	return (
		<section id="triangulo_equilatero" className="card__container">
			<figure className="card__figure title__effect">
				<img src={Triangle} alt="Imagen de triángulo equilátero" />
				<figcaption>Triángulo Equilátero</figcaption>
			</figure>
			<div className="card__calcs">
				<label htmlFor="triangle-scalene">Ingresa el lado de tu triángulo:</label>
				<input
					id="triangle-scalene"
					type="number"
					placeholder="Lado"
					onChange={(e) => {
						calcScalene(e.target.value);
					}}
				/>
				<p className="card__calc">
					<i className="card__calc--result">Perímetro</i> = {perimeterScalene ? perimeterScalene : <i>x</i>}
				</p>
				<p className="card__calc">
					<i className="card__calc--result">Área</i> = {areaScalene ? areaScalene : <i>x</i>}
				</p>
			</div>
			<ul className="card__list-characteristics" aria-label="Características:">
				<li>Es un polígono regular: sus tres lados son iguales.</li>
				<li>Es equiangular: Sus ángulos internos son iguales.</li>
			</ul>
			<ul className="card__list-formulas" aria-label="Fórmulas:">
				<li>
					<strong>Perímetro:</strong> <i>l × 3</i>
					<br />
					En dónde <i>l</i> es el lado del triángulo.
				</li>
				<li>
					<strong>Área:</strong> <i>(b × h) / 2</i>
					<br />
					En dónde <i>b</i> es la base y <i>h</i> es la altura.
				</li>
			</ul>
			<ul className="card__list-extras" aria-label="Extras:">
				<li>
					<div>
						<p>
							<strong>Calcular Altura con el </strong>
							<i>Teorema de pitágoras</i>
						</p>
						<p>
							<i>c = √a² + b²</i>
						</p>
						<p>
							<i>a = √c² - b²</i>
						</p>
						<p>
							<i>b = √c² - a²</i>
						</p>
						<p>
							En dónde <i>c</i> es la hipotenusa, <i>a</i> y <i>b</i> son los catetos, podemos calcular la
							altura de un triángulo equilátero de la siguiente manera:
						</p>
					</div>
					<ol>
						<li>
							<p></p>
						</li>
						<li>
							<p>a</p>
						</li>
						<li>
							<p>a</p>
						</li>
						<li>
							<p>a</p>
						</li>
						<li>
							<p>a</p>
						</li>
					</ol>
				</li>
			</ul>
		</section>
	);
}
