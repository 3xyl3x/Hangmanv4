interface HangmanProps {
	fails: number;
}

export const Hangman = (props: HangmanProps) => {
	const parts = [
		<circle key="head" cx="50" cy="30" r="20" />,
		<line key="body" x1="50" y1="50" x2="50" y2="120" />,
		<line key="left-arm" x1="50" y1="70" x2="30" y2="90" />,
		<line key="right-arm" x1="50" y1="70" x2="70" y2="90" />,
		<line key="left-leg" x1="50" y1="120" x2="30" y2="150" />,
		<line key="right-leg" x1="50" y1="120" x2="70" y2="150" />,
	];

	const visibleParts = parts.slice(0, props.fails);

	return (
		<svg height="250" width="200" xmlns="http://www.w3.org/2000/svg">
			<line x1="20" y1="10" x2="20" y2="200" stroke="black" stroke-width="4" />
			<line x1="10" y1="200" x2="30" y2="200" stroke="black" stroke-width="4" />
			<line x1="20" y1="10" x2="100" y2="10" stroke="black" stroke-width="4" />

			<circle
				cx="100"
				cy="30"
				r="20"
				stroke="black"
				stroke-width="4"
				fill="white"
			/>

			<line
				x1="100"
				y1="50"
				x2="100"
				y2="120"
				stroke="black"
				stroke-width="4"
			/>

			<line x1="100" y1="60" x2="80" y2="80" stroke="black" stroke-width="4" />
			<line x1="100" y1="60" x2="120" y2="80" stroke="black" stroke-width="4" />

			<line
				x1="100"
				y1="120"
				x2="80"
				y2="150"
				stroke="black"
				stroke-width="4"
			/>
			<line
				x1="100"
				y1="120"
				x2="120"
				y2="150"
				stroke="black"
				stroke-width="4"
			/>
		</svg>
	);
};

export default Hangman;
