
import { useState } from "react";
import { letters } from "../helpers/letters";
import "./App.css";
import { HangImage } from "./components/HangImage";

function App() {

  const [word] = useState ("COMPUTER");
  const [hiddenWord] = useState ("_ ".repeat(word.length));

  const [attempts, setAttempts] = useState(0)

  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttempts( Math.min(attempts + 1, 9) );
  }

  return (
    <div className="App">

      {/*Images*/}
      <HangImage imageNumber={ attempts }></HangImage>

      {/*Hidden Word*/}
      <p>{hiddenWord}</p>

      {/*Attempt counter*/}
      <h3>Attempts: {attempts}</h3>

      {/*Letters Bottoms*/}
      {
        letters.map(letter => (
          <button 
          onClick={() => checkLetter(letter)}
          key={letter}>
            {letter}</button>
        ))
      }
      

    </div>
  )
};

export default App;
