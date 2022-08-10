import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider} from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="NUESTROS PRODUCTOS" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Categoria: " />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </UserContextProvider>
      
    </div>
  );
}

export default App;
