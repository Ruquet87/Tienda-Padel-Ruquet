// Version Simple

// import { useState, useContext } from "react";
// import { CarritoContext } from "../../context/CarritoContext";
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";

// const Checkout = () => {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailConfirmacion, setEmailConfirm] = useState("");
//   const [error, setError] = useState("");
//   const [ordenId, setOrdenId] = useState("");
//   const { carrito, vaciarCarrito, total, cantidadTotal } =
//     useContext(CarritoContext);

//   // funciones y validaciones
//   const manejadorFormulario = (event) => {
//     event.preventDefault();

//     //verificamos que los campos esten completos
//     if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
//       setError("Por favor complete todos los campos");
//       return;
//     }
//     //verificamos que los email coincidan
//     if (email !== emailConfirmacion) {
//       setError("Los campos de email no coinciden");
//       return;
//     }

//     // creamos objeto con datos de la orden
//     const orden = {
//       items: carrito.map((producto) => ({
//         id: producto.item.id,
//         nombre: producto.item.nombre,
//         cantidad: producto.cantidad,
//       })),
//       total: total,
//       fecha: new Date(),
//       nombre,
//       apellido,
//       telefono,
//       email,
//     };

//     // guardamos la orden en firestore
//     addDoc(collection(db, "ordenes"), orden)
//       .then((docRef) => {
//         setOrdenId(docRef.id);
//         vaciarCarrito();
//       })
//       .catch((error) => {
//         console.log("Error al crear la orden", error);
//         setError(
//           "Se produjo un error al crear la orden, por favor intente nuevamente"
//         );
//       });
//   };

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <form onSubmit={manejadorFormulario}>
//         <div>
//           <label htmlFor="">Nombre</label>
//           <input type="text" onChange={(e) => setNombre(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="">Apellido</label>
//           <input type="text" onChange={(e) => setApellido(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="">Teléfono</label>
//           <input type="text" onChange={(e) => setTelefono(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="">Email</label>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="">Confirmar Email</label>
//           <input
//             type="email"
//             onChange={(e) => setEmailConfirm(e.target.value)}
//           />
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit">Finalizar Compra</button>

//         {ordenId && (
//           <strong>
//             ¡Gracias por tu compra! Tu número de orden es {ordenId}
//           </strong>
//         )}
//       </form>
//     </div>
//   );
// };
// export default Checkout;

// Version Completa con descuento de stock

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  // funciones y validaciones
  const manejadorFormulario = (event) => {
    event.preventDefault();

    //verificamos que los campos esten completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }
    //verificamos que los email coincidan
    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }

    // creamos objeto con datos de la orden
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    // modificamos el codigo para que ejecute varias promesas en paralelo, por un lado que actualice el stock de los productos y por otro que genere la orden de compra, vamos a usar Promise.all

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        return addDoc(collection(db, "ordenes"), orden);
      })
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError(
          "Se produjo un error al crear la orden, por favor intente nuevamente"
        );
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirmar Email</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Finalizar Compra</button>

        {ordenId && (
          <strong>
            ¡Gracias por tu compra! Tu número de orden es {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};
export default Checkout;
