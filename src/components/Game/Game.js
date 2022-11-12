import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from "../../game-helpers";
import { WORDS } from '../../data';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
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
    const checkedGuess = checkGuess(tentativeGuess, answer)
    const nextGuess = [...guesses, checkedGuess];
    setGuesses(nextGuess);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuess.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    };
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={gameStatus !== 'running'}/>
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
