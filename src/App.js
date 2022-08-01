
import './App.css';
import Navbar from './components/Navbar/Navbar.js';

import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
      <ItemListContainer greeting="TIENDA DE CUADROS" />
      <ItemDetailContainer/>

      </main>
    </div>
  );
}

export default App;
