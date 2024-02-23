interface WordProps {
  word: string;
  correctCharacters: string;
}

export const Word = (props: WordProps) => {
  const { word, correctCharacters } = props;
  return (
    <div className="word-container">
      {word.split('').map((letter, index) => {
        let show = correctCharacters.includes(letter);

        return (
          <span key={index} className={`letter ${show ? 'show' : ''}`}>
            {show ? letter : '_'}
          </span>
        );
      })}
    </div>
  );
};

export default Word;