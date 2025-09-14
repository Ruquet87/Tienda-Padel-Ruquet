import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../Asycmocks";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { IdCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = IdCategoria
      ? getProductosPorCategoria
      : getProductos;
    funcionProductos(IdCategoria).then((res) => setProductos(res));
  }, [IdCategoria]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
