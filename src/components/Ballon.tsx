interface BallonProps {
	letter: string;
	correct: boolean;
}

const Balloon = (props: BallonProps) => {
	const { letter, correct } = props;
	return (
		<>
			<div className="btn btn-primary mx-1">
				{letter.toUpperCase()} {correct ? "y" : "n"}
			</div>
		</>
	);
};
export default Balloon;
