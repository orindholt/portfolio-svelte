type Options = {
	duration?: number;
	ease?: string;
};

export default function accordion(node: HTMLElement, isOpen: boolean) {
	const initialHeight = node.offsetHeight;
	node.style.height = isOpen ? "auto" : "0";
	node.style.overflow = "hidden";
	return {
		update(isOpen: boolean) {
			const animation = node.animate(
				[
					{
						height: initialHeight + "px",
						overflow: "hidden"
					},
					{
						height: 0,
						overflow: "hidden"
					}
				],
				{ duration: 300, fill: "both", easing: "ease-in-out" }
			);
			animation.pause();
			if (!isOpen) {
				animation.play();
			} else {
				animation.reverse();
			}
		}
	};
}
