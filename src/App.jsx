import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailcontainer from "./componentes/ItemDetailcontainer/ItemDetailcontainer";
import ItemList from "./componentes/ItemList/ItemList";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailcontainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
