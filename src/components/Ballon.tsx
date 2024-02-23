import { useState } from "react";

interface BallonProps {
	letter: string;
	correct: boolean;
	addCorrectCharacter(letter: string): void;
	addFail(): void;
}

const Balloon = (props: BallonProps) => {
	const [pressed, setPressed] = useState<boolean>(false);
	const { letter, correct, addCorrectCharacter, addFail } = props;

	const handleBallonPress = () => {
		setPressed(true);
		if (correct) {
			addCorrectCharacter(letter);
		} else {
			addFail();
		}
	};
	return (
		<>
			<button
				className={`btn btn-primary ${
					pressed ? (correct ? "btn-success" : "btn-danger") : ""
				} mx-1`}
				onClick={handleBallonPress}
				disabled={pressed}
			>
				{letter.toUpperCase()}
			</button>
		</>
	);
};
export default Balloon;
