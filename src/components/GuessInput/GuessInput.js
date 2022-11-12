import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function submitGuess(event) {
    event.preventDefault();

    if(tentativeGuess.length !== 5) {
      window.alert('Guess must be 5 letters');
      return;
    };
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => submitGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={disabled}
        id="guess-input" 
        type="text" 
        value={tentativeGuess} 
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;