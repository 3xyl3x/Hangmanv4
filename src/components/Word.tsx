interface WordProps {
	word: string;
	correctCharacters: string;
}

export const Word = (props: WordProps) => {
	const { word, correctCharacters } = props;

	return (
		<>
			<div>
				{word} - {correctCharacters}
			</div>
		</>
	);
};

export default Word;
