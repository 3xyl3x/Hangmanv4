import "bootstrap/dist/css/bootstrap.min.css";
import Balloons from "./components/Balloons";
import Word from "./components/Word";
import Hangman from "./components/Hangman";
import { useState, useEffect } from "react";
import { getWord } from "./components/service";

function App() {
	const [fails, setFails] = useState<number>(0);
	const [word, setWord] = useState<string>("");
	const [correctCharacters, setCorrectCharactes] = useState<string>("abcdefg");

	const getNewWord = async () => {
		let response = await getWord();
		setWord(response.data[0]);
	};

	useEffect(() => {
		getNewWord();
	}, []);

	return (
		<>
			<div className="row text-center">
				<div className="col-12">
					<h2>Hangman tha game {word}</h2>
				</div>
				<div className="col-12">
					<Balloons word={word} />
				</div>
				<div className="col-12">
					<Hangman fails={fails} />
				</div>
				<div className="col-12">
					<Word word={word} correctCharacters={correctCharacters} />
				</div>
			</div>
		</>
	);
}

export default App;
