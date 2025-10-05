import "./cartwidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const Cartwidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart">
        <img
          className="imgcarrito"
          src="../../public/img/Carrito.jpg"
          alt="carrito de compras"
        />
        {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default Cartwidget;
