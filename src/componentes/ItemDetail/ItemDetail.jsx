import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="ContenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID {id}</h3>
      <img src={img} alt={nombre} />
      <p>La remerita del Mozart de Catamarca</p>
    </div>
  );
};

export default ItemDetail;
