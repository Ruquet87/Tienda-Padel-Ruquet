import { useEffect, useState } from "react";
// import { getUnProducto } from "../../Asycmocks";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailcontainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);
    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  // useEffect(() => {
  //   getUnProducto(idItem).then((respuesta) => setProducto(respuesta));
  // }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailcontainer;
