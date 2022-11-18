import './App.css';
import pokemonLists from './pokemonList';
import Pokegame from "./Pokegame";

function App() {
  return (
    <div className="App">
      <Pokegame pokemonLists = {pokemonLists}/>
    </div>
  );
}

export default App;
