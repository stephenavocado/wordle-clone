import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses';
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess];
    setGuesses(nextGuess);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
