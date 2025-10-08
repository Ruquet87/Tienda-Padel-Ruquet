import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [Loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("IdCat", "==", idCategoria))
      : collection(db, "productos");
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("Finalizado");
        setLoading(false);
      });
  }, [idCategoria]);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
      {Loading ? <Loader /> : <ItemList productos={productos} />}
    </>
  );
};

export default ItemListContainer;
