const vaciarCarrito = document.querySelector("#vaciarCarrito");

const mostrarCarrito = () => {
  let tablaHTML = "";
  const tbody = document.querySelector("#tabla");
  const carrito = JSON.parse(localStorage.getItem("prodCarrito")) || []
  if (carrito.length >= 0) {
  carrito.forEach((producto) =>
        (tablaHTML += armarCarrito(producto)),
    );
    tbody.innerHTML = tablaHTML;
  }
  if (carrito.length === 0) {
    let mensaje = document.querySelector(".carrito-p");
    mensaje.innerHTML = `
    <p>¡Aun no cargaste productos a tu carrito!</p>
    `;
  }
};

mostrarCarrito()


function activarBotonesDelete() {
  const buttonsDelete = document.querySelectorAll("button.btn-delete-cart.btn-add");
  buttonsDelete.forEach(btn => {
    btn.addEventListener("click", () => {
      let pos = carrito.findIndex((prod) => prod.nombre === btn.id);
      if (pos > -1) {
        carrito.splice(pos, 1);
        localStorage.setItem("prodCarrito", JSON.stringify(carrito));
        mostrarCarrito();
        activarBotonesDelete();
      }
    });
  });
}
activarBotonesDelete();


vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  localStorage.clear();
  mostrarCarrito();
});

// function calcularTotal() {
//   // console.log('producto 1111',producto)
//   let total = document.querySelector("h4#total");
//   let totalCompra = carrito.reduce((acc, producto) => acc + producto.precio, 0);
//   total.innerText = `Total: $ ${totalCompra.toLocaleString()} `;
// }

// 
const botonComprar = document.querySelector("#btnCompra");

botonComprar.addEventListener("click", () => {
  Swal.fire({
    icon: "info",
    title: "¿Desea confirmar su compra?",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
});
