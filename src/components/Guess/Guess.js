import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {

  return (
    <p className="guess">
      {
        range(5).map((num, index) => (
          <span 
            key={index} 
            className={`cell ${guess && guess[num].status }`}
          >
            {guess ? guess[num].letter : undefined}
          </span>
        ))
      }
    </p>
  );
}

export default Guess;
