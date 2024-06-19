import { browser } from "$app/environment";

let iob: IntersectionObserver;

const initializeIob = () => {
	console.log("called");

	iob = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const customEventName = entry.isIntersecting ? "viewportEnter" : "viewportExit";
				entry.target.dispatchEvent(new CustomEvent(customEventName));
			});
		},
		{
			rootMargin: "-100px 0px"
		}
	);
};

const viewport = (element: HTMLElement) => {
	if (!iob && browser) initializeIob();

	iob.observe(element);

	return {
		destroy() {
			iob.unobserve(element);
		}
	};
};

export default viewport;
