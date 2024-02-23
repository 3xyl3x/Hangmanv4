interface HangmanProps {
	fails: number;
}

export const Hangman = (props: HangmanProps) => {
	const parts = [
		<circle key="head" cx="50" cy="30" r="20" />,
		<line key="body" x1="50" y1="50" x2="50" y2="120" />,
		<line key="left-arm" x1="50" y1="70" x2="30" y2="90" />,
		<line key="right-arm" x1="50" y1="70" x2="70" y2="90" />,
		<line key="left-leg" x1="50" y1="120" x2="30" y2="150" />,
		<line key="right-leg" x1="50" y1="120" x2="70" y2="150" />,
	  ];
	
	  const visibleParts = parts.slice(0, props.fails);
	
	  return (
		<svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
		  {visibleParts}
		</svg>
	  );
	};

export default Hangman;
