import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailcontainer from "./componentes/ItemDetailcontainer/ItemDetailcontainer";
import ItemList from "./componentes/ItemList/ItemList";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:IdCategoria"
            element={<ItemListContainer />}
          />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
