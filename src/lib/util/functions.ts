export function shadeColor(color: string, percent: number) {
	let R = parseInt(color.substring(1, 3), 16);
	let G = parseInt(color.substring(3, 5), 16);
	let B = parseInt(color.substring(5, 7), 16);

	R = Math.floor((R * (100 + percent)) / 100);
	G = Math.floor((G * (100 + percent)) / 100);
	B = Math.floor((B * (100 + percent)) / 100);

	R = R < 255 ? R : 255;
	G = G < 255 ? G : 255;
	B = B < 255 ? B : 255;

	R = Math.round(R);
	G = Math.round(G);
	B = Math.round(B);

	const format = (n: number) =>
		n.toString(16).length == 1 ? "0" + n.toString(16) : n.toString(16);

	const RR = format(R);
	const GG = format(G);
	const BB = format(B);

	return "#" + RR + GG + BB;
}

export function hexToRgb(hex: string, css: boolean = false) {
	const bigint = parseInt(hex.replace("#", ""), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return css ? `rgb(${r}, ${g}, ${b})` : { r, g, b };
}
