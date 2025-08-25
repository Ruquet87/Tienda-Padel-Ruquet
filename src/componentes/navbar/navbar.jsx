import Cartwidget from "../cartwidget/cartwidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <h1>Tienda de padel</h1>
      <nav>
        <ul>
          <li>Paletas</li>
          <li>Accesorios</li>
          <li>Indumentaria</li>
        </ul>
      </nav>
      <Cartwidget />
    </header>
  );
};

export default Navbar;
