import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Wk-SXuyQhtFF7aIlsT4ksMPJtnXtG9k",
  authDomain: "final-tienda-padel-ruquet.firebaseapp.com",
  projectId: "final-tienda-padel-ruquet",
  storageBucket: "final-tienda-padel-ruquet.firebasestorage.app",
  messagingSenderId: "25231032527",
  appId: "1:25231032527:web:56a58a026f0a73f9ff77ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

///////////////////////////////////////////////////////////////////////////

const misProductos = [
  {
    id: "1",
    nombre: "Paleta",
    precio: 350000,
    img: "../public/Img/Paleta-nox-at10.jpg",
    IdCat: "paletas",
    stock: 5,
  },
  {
    id: "2",
    nombre: "Remera",
    precio: 40000,
    img: "../public/img/remera-agustin-tapia.jpg",
    IdCat: "indumentaria",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Pelota",
    precio: 15000,
    img: "../public/img/tubo-de-pelotas-nox.jpg",
    IdCat: "accesorios",
    stock: 20,
  },
  {
    id: "4",
    nombre: "Zapatilla",
    precio: 70000,
    img: "../public/img/zapatillas-nox-at10.jpg",
    IdCat: "indumentaria",
    stock: 3,
  },
];

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db); // Crear un batch
  const productosRef = collection(db, "productos"); // Referencia a la colección

  // Recorre el array de productos
  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef); // Crea un nuevo documento con un ID automático
    batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
  });

  // Ejecuta el batch
  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};

// subirProductos();
