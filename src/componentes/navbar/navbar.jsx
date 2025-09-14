import Cartwidget from "../cartwidget/cartwidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda de padel</h1>
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
