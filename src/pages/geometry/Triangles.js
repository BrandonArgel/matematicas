import React from "react";

import Main from "../../components/Main";
import Title from "../../components/Title";
import { Slideshow, Slide, TextoSlide } from "../../components/SlideShow";

export default function GeometryTriangles() {
	return (
		<Main>
			<Title>Triángulos</Title>
			<Slideshow controles={true}>
				<Slide>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1"
						alt=""
					/>
					<TextoSlide>
						<p>Triángulo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1"
						alt=""
					/>
					<TextoSlide>
						<p>Triángulo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fpolygons.jpg?alt=media&token=92cdb672-bf79-4a9a-ad11-bf7895b1a699"
						alt=""
					/>
					<TextoSlide>
						<p>Triángulo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fstatistics.jpg?alt=media&token=1dcf5ae0-2349-4f1a-8e08-fccae51784eb"
						alt=""
					/>
					<TextoSlide>
						<p>Triángulo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1"
						alt=""
					/>
					<TextoSlide>
						<p>Triángulo</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</Main>
	);
}
