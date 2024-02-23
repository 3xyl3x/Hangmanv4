import { useEffect, useState } from "react";
import { getWord } from "./service";

export const Word = () => {
	const [word, setWord] = useState("");
	const [clickedBalloon, setClickedBallon] = useState("");
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

	useEffect(() => {
		if (word) return;

		let componentIsActive = true;

		const getNewWord = async () => {
			if (componentIsActive) {
				let response = await getWord();
				setWord(response.data[0]);
			}
		};
		getNewWord();
		return () => {
			componentIsActive = false;
		};
	});

	// let tempArr : []
	// for (let i = 0; i < word.length; i++) {
	//   tempArr = [...tempArr, word[i]]
	// }

	//   console.log(word.length);
	// for (let i = 0; i < word.length; i++) {
	//     setWordArr([...wordArr, ])
	// }

	return (
		<>
			<div>
				{word?.split("").map((letter) => (
					<p>{letter}</p>
				))}
			</div>
		</>
	);
};
