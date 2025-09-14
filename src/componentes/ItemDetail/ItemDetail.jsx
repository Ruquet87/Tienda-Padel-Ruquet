import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  // Creamos un estado local con la cantidad de productos agregados

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Funcion que maneja la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados: " + cantidad);
  };

  return (
    <div className="ContenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID {id}</h3>
      <img src={img} alt={nombre} />
      <p>La remerita del Mozart de Catamarca</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra</Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
