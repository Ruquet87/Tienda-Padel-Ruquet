import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  // Creamos un estado local con la cantidad de productos agregados

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  // Funcion que maneja la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    toast.success(`Se agrego correctamente al carrito`, {
      autoClose: 1500,
      theme: "dark",
      position: "top-center",
    });
  };

  return (
    <div className="ContenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID {id}</h3>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>

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
