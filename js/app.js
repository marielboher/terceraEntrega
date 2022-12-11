const busqueda = document.querySelector("#busqueda");
const btnBusqueda = document.querySelector("button.btnBusqueda");
const formulario = document.querySelector("#busqueda");
let productos = [];
let resultadoBusqueda = [];

document.addEventListener("DOMContentLoaded", () => {
  traerDatos();
});

async function traerDatos() {
  try {
    const response = await fetch("bbdd/productos.json");
    const data = await response.json();
    if (data.length > 0) {
      productos.push(...data);
      getCards(productos);
      // activarBtn();
    }
  } catch (error) {
    console.error(error);
  }
}

// generar cards shop

const cardTienda = document.getElementById("cardTienda");

const getCards = (prod) => {
  let cargarPagina = "";
  if (prod.length > 0) {
    prod.map((producto) => {
      cargarPagina += cart(producto);
    });
    cardTienda.innerHTML = cargarPagina;
  }

  let botonesAdd = document.querySelectorAll(".btn-add");
  botonesAdd = [...botonesAdd];
  botonesAdd.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      let actualId = parseInt(event.currentTarget.id);
      let productoAcual = productos.find((item) => item.id == actualId);

      let existe = false;
      carrito.map((auri) => {
        if (actualId == auri.id) {
          existe = true;
        }
      });
      if (existe) {
        productoAcual.cantidad += 1;
        console.log(productoAcual);
        localStorage.setItem("prodCarrito", JSON.stringify(carrito));
        alerta(`Agregaste '${productoAcual.nombre}' al carrito`, "#088170");
      } else {
        carrito.push(productoAcual);
        localStorage.setItem("prodCarrito", JSON.stringify(productoAcual));
        alerta(`Agregaste '${productoAcual.nombre}' al carrito`, "#088170");
      }
    });
  });
};

btnBusqueda.addEventListener("click", () => {
  filter = formulario.value.toUpperCase();
  let getResult = productos.filter((producto) =>
    producto.nombre.toUpperCase().includes(filter)
  );
  if (getResult.length > 0) {
    getCards(getResult);
  } else {
    console.log("producto no encontrado");
  }
});
