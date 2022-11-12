import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import GuessInput from "../GuessInput/GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"; 

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return
    };
    
    const nextGuess = [...guesses, tentativeGuess];
    setGuesses(nextGuess);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
