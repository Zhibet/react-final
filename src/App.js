import Palette from './palete'; 
import seedColors from './seedColors'; 

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[5]} />
    </div>
  );
}

export default App;
