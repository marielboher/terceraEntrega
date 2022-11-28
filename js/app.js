const cardTienda = document.getElementById("cardTienda");
const busqueda = document.querySelector('#busqueda')

// generar cards shop

function generarCards(array) {
  let contenido = "";
  if (array.length > 0) {
    array.forEach((producto) => {
      contenido += cards(producto);
    });
    cardTienda.innerHTML = contenido;
  }
}
generarCards(productos);

const botonesAdd = document.querySelectorAll(".btn-add");

// activar botones carrito

function activarBtn() {
  botonesAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      let resultado = productos.find((prod) => prod.id === parseInt(btn.id));
      carrito.push(resultado);
      localStorage.setItem("prodCarrito", JSON.stringify(carrito));
      alerta(`'${resultado.nombre}' se agregó al carrito`, '#088170')
    });

  });
}
activarBtn();


// buscarProducto

function filtrarProductos() {
  let resultado = productos.filter(producto =>  producto.nombre.toUpperCase().includes(busqueda.value.toUpperCase().trim()))
  resultado.length > 0 ? generarCards(resultado) : console.warn("No se han encontrado coincidencias.")
}

busqueda.addEventListener("search", ()=> {
busqueda.value.trim() !== "" ?  filtrarProductos() : generarCards(productos)
})

const alerta = (text, bgcolor)=> {
  Toastify({
      text: text,
      duration: 3000,
      close: true,
      gravity: "top", 
      position: "right",
      stopOnFocus: true, 
      style: { background: bgcolor || 'CornFlowerBlue', fontSize: '14px'}
    }).showToast();
}

