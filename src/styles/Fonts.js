import { css } from "styled-components";

import AllertaStencil from "../fonts/AllertaStencil-Regular.ttf";

const allertaStencil = {
	name: "Allerta Stencil",
	normal: AllertaStencil,
};

const createFontFaces = (family) => {
	let styles = `
		@font-face {
			font-family: "${family.name}";
			src: url("${family.normal}") format("truetype");
			font-weight: normal;
			font-style: normal;
		}
	`;

	return styles;
};

const allertaStencilNormal = createFontFaces(allertaStencil);

const Fonts = css`
	${allertaStencilNormal}
`;

export default Fonts;
