
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Counter from './components/Counter/Counter.js'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  
  const handleOnAdd = (quantity) => {
    console.log('Agregaste '+quantity+' items al carrito');

  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
      </header>

      <main>
      <ItemListContainer greeting="Tienda de Cuadros" />
      <Counter stock={10} initial={1} onAdd={handleOnAdd}/>
      </main>
    </div>
  );
}

export default App;
