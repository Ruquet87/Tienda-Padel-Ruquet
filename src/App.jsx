import ItemDetailcontainer from "./componentes/ItemDetailcontainer/ItemDetailcontainer";
import ItemList from "./componentes/ItemList/ItemList";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailcontainer />
    </>
  );
};

export default App;
