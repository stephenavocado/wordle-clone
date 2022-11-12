import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from "../../game-helpers";
import { WORDS } from '../../data';
import Banner from '../Banner/Banner';
import GuessResults from '../GuessResults';
import GuessInput from "../GuessInput/GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"; 

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return
    };

    if (tentativeGuess === answer) {
      setGameStatus('won');
    };
    
    const checkedGuess = checkGuess(tentativeGuess, answer)
    const nextGuess = [...guesses, checkedGuess];
    setGuesses(nextGuess);
  }

  return (
    <>
      {gameStatus !== 'running' && 
        <Banner gameStatus={gameStatus} numOfGuesses={guesses.length}/>
      }
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={gameStatus !== 'running'}/>
    </>
  );
}

export default Game;
