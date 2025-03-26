
import { useEffect, useState } from "react";
import { letters } from "../helpers/letters";
import "./App.css";
import { HangImage } from "./components/HangImage";

function App() {

  const [word] = useState ("COMPUTER");
  const [hiddenWord, setHiddenWord] = useState ("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0)
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determinate if the person lose
  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }
  }, [attempts]) // hooks

  //Determinate if the person win

useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word){
      setWon(true);
    }
}, [hiddenWord])

  const checkLetter = (letter: string) => {

    if(lose) return; //Validation if lost cannot enter more letters

    if(!word.includes(letter)) {
      setAttempts( Math.min(attempts + 1, 9) );
      return;
    } //logic validate attempts < 9

    const hiddenWordArray = hiddenWord.split(" ");

    for(let i= 0; i < word.length; i++){
      if (word[i] === letter){
        hiddenWordArray [i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(" "));
  } //Function show hidden word

  return (
    <div className="App">

      {/*Images*/}
      <HangImage imageNumber={ attempts }></HangImage>

      {/*Hidden Word*/}
      <p>{hiddenWord}</p>

      {/*Attempt counter*/}
      <h3>Attempts: {attempts}</h3>

      {/*Message if lose*/}
      {
        (lose)
        ? <h2>You lose the word was: { word } :( </h2>
        :""
      }

      {/*Message if won*/}
      {
        (won)
        ? <h2>Congratulations you won :)</h2>
        :""
      }

      {/*Letters Bottoms*/}
      {
        letters.map(letter => (
          <button 
          onClick={() => checkLetter(letter)}
          key={letter}>
            {letter}</button>
        ))
      } {/*Array alphabet*/}
      

    </div>
  )
};

export default App;
