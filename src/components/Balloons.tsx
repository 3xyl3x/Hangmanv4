import Balloon from "./Ballon";
interface BalloonsProps {
	word: string;
	addCorrectCharacter(letter: string): void;
	addFail(): void;
}
export const Balloons = (props: BalloonsProps) => {
	const { word, addCorrectCharacter, addFail } = props;

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
				let correct = word.includes(letter) ? true : false;
				return (
					<Balloon
						letter={letter}
						correct={correct}
						addCorrectCharacter={addCorrectCharacter}
						addFail={addFail}
					/>
				);
			})}
		</>
	);
};

export default Balloons;
