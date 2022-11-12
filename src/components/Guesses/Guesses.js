import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {
        guesses.map((guess, index) => {
          return (
            <p key={index} className="guess">{guess}</p>
          )
        })
      }
    </div>
  );
}

export default Guesses;
