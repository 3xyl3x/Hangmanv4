import "./App.css";
import Balloons from "./components/Balloons";

import { Word } from "./components/Word";
import Hangman from "./components/Hangman";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [fails, setFails] = useState<number>(6);

	return (
		<>
			<Balloons />
			<Hangman fails={fails} />
			<Word />
		</>
	);
}

export default App;
