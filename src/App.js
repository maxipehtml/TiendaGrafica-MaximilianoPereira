
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Counter from './components/Counter/Counter.js'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
      </header>

      <main>
      <ItemListContainer greeting="Hola Coders" />
      <Counter />
      </main>
    </div>
  );
}

export default App;
