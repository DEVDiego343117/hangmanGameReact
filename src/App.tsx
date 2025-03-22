
import { letters } from "../helpers/letters";
import "./App.css";


function App() {
  return (
    <div className="App">

      {/*Images*/}
      <h3>Game Images</h3>

      {/*Hidden Word*/}
      <p>_ _ _ _ _ _ _ _</p>

      {/*Attempt counter*/}
      <h3>Attempts: 0</h3>

      {/*Letters Bottoms*/}
      {
        letters.map(letter => (
          <button key={letter}>
            {letter}</button>
        ))
      }
      

    </div>
  )
};

export default App;
