import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {
        range(6).map((rowNumber) => (
          <Guess key={rowNumber} guess={guesses[rowNumber]} />
        ))
      }
    </div>
  );
}

export default GuessResults;
