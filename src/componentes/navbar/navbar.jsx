import Cartwidget from "../cartwidget/cartwidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="../public/img/logo.png"
          alt="Logo Tienda de Padel"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/categoria/paletas">Paletas</Link>
          </li>
          <li>
            <Link to="/categoria/accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="/categoria/indumentaria">Indumentaria</Link>
          </li>
        </ul>
      </nav>
      <Cartwidget />
    </header>
  );
};

export default Navbar;
