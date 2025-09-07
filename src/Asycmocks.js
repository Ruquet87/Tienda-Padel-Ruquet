const misProductos = [
  {
    id: 1,
    nombre: "Paleta",
    precio: 350000,
    img: "../public/Img/Paleta-nox-at10.jpg",
  },
  {
    id: 2,
    nombre: "Remera",
    precio: 40000,
    img: "../public/img/remera-agustin-tapia.jpg",
  },
  {
    id: 3,
    nombre: "Pelota",
    precio: 15000,
    img: "../public/img/tubo-de-pelotas-nox.jpg",
  },
  {
    id: 4,
    nombre: "Zapatilla",
    precio: 70000,
    img: "../public/img/zapatillas-nox-at10.jpg",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};
