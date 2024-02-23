import "./App.css";
import Balloons from "./components/Balloons";

import { Word } from "./components/Word";
import Hangman from "./components/Hangman";
import { useState } from "react";

function App() {
	const [fails, setFails] = useState<Number>(0);

	return (
		<>
			<Balloons />
			<Hangman fails={0} />
			<Word />
		</>
	);
}

export default App;
