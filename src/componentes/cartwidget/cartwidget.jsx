import "./cartwidget.css";

const Cartwidget = () => {
  const imgcarrito =
    "https://thumbs.dreamstime.com/b/icono-de-l%C3%ADnea-carro-compra-trazo-negro-editable-trole-concepto-negocios-cestas-carrito-con-n%C3%BAmero-compras-vector-ilustraci%C3%B3n-170268189.jpg";

  return (
    <div>
      <img className="imgcarrito" src={imgcarrito} alt="Carrito de compras" />
    </div>
  );
};

export default Cartwidget;
