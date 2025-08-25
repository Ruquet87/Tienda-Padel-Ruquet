import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a nuestra tienda de padel" />
    </>
  );
};

export default App;
