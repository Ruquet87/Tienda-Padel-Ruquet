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

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((item) => item.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (IdCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (item) => item.IdCat === IdCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
