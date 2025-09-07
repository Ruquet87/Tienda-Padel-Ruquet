import { useEffect, useState } from "react";
import { getUnProducto } from "../../Asycmocks";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailcontainer = () => {
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    getUnProducto(2).then((respuesta) => setProducto(respuesta));
  }, []);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailcontainer;
