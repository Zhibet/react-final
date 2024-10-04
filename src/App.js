import Palette from './palete'; 
import seedColors from './seedColors'; 
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Palette seedColors={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
