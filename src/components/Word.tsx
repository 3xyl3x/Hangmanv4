interface WordProps {
	word: string;
	correctCharacters: string;
}

export const Word = (props: WordProps) => {
	const { word, correctCharacters } = props;
	return (
		<>
			{word.split("").map((letter) => {
				let show = correctCharacters.includes(letter) ? true : false;

				return show ? letter : " _ ";
			})}
		</>
	);
};

export default Word;
