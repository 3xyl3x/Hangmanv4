interface BallonProps {
	letter: string;
}

const Balloon = (props: BallonProps) => {
	const { letter } = props;
	return (
		<>
			<div className="btn btn-primary mx-1">{letter.toUpperCase()}</div>
		</>
	);
};
export default Balloon;
