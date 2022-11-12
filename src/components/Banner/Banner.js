import React from "react";

function Banner({ gameStatus, numOfGuesses, answer }) {
  return (
    <div class={`${gameStatus === 'won' ? 'happy' : 'sad'} banner`}>
      {
        gameStatus === 'won' ?
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{''} {numOfGuesses} guess{numOfGuesses > 1 && 'es'}</strong>.
        </p>
        :
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
    </div>
  );
}

export default Banner;
