
import { useEffect, useState } from "react";
import { letters } from "./helpers/letters";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { getRandomWord } from "./helpers/getRandomWord";

function App() {

  const [word, setWord] = useState (getRandomWord());
  const [hiddenWord, setHiddenWord] = useState ("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0) //I
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
}, [hiddenWord, word])

  const checkLetter = (letter: string) => {

    if(lose) return; //Validation if lose cannot enter more letters
    if(won) return; //Validation if won cannot enter more letters

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

  const newGame = () => {
    const newWord = getRandomWord();
    setWord (newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  }

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
       <div className="letters-container">
       {
         letters.map(letter => (
           <button 
             onClick={() => checkLetter(letter)}
             key={letter}>
             {letter}
           </button>
         ))
       }
     </div>
      } {/*Array alphabet*/}

      {/* New Game Button */}
      {
    (won || lose) && (
    <div className="new-game-container">
      <button onClick={newGame} className="newgame">¿New Game?</button>
    </div>
    )
  }

    </div>
  )
};

export default App;
