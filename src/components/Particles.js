import React from "react";
import Particles from "react-particles-js";

export default function ParticlesJS() {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 100,
						density: {
							enable: true,
							value_area: 1000,
						},
					},
					color: {
						value: "#16FFE2",
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#16FFE2",
						},
					},
					opacity: {
						value: 1,
						random: true,
						anim: {
							enable: true,
							speed: 0.5,
							opacity_min: 0.5,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: true,
							speed: 40,
							size_min: 1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 170,
						color: "#16FFE2",
						opacity: 0.1,
						width: 1,
					},
					move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				retina_detect: true,
			}}
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: "0",
				left: "0",
			}}
		/>
	);
}
