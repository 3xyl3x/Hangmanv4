import Balloon from "./Ballon";

export const Balloons = () => {
	const handleClick = (e: any) => {
		setClickedBallon(e.target.value);
	};
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"W",
		"x",
		"y",
		"z",
		"å",
		"ä",
		"ö",
	];

	return (
		<>
			{alphabet.map((letter) => {
				return <Balloon letter={letter} />;
			})}
		</>
	);
};

export default Balloons;
