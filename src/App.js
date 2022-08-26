import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider} from "./context/UserContext";
import { NotificationProvider } from "./notifications/Notification";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
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
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </UserContextProvider>
      </NotificationProvider>
      
    </div>
  );
}

export default App;
