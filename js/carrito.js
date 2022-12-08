const vaciarCarrito = document.querySelector("#vaciarCarrito");
const tbody = document.querySelector("#tabla");

const mostrarCarrito = () => {
  let tablaCarrito = "";
  if (carrito.length >= 0) {
  carrito.forEach((producto) =>
        (tablaCarrito += armarCarrito(producto)),
    );
    tbody.innerHTML = tablaCarrito;
  }
  if (carrito.length === 0) {
    let mensaje = document.querySelector(".carrito-p");
    mensaje.innerHTML = `
    <p>¡Aun no cargaste productos a tu carrito!</p>
    `;
  }
  totalAPagar()
};
mostrarCarrito()

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  localStorage.clear();
  mostrarCarrito();
});


function btnEliminar() {
  const buttonsDelete = document.querySelectorAll("button.btn-delete-cart.btn-add");
  buttonsDelete.forEach(btn => {
    btn.addEventListener("click", () => {
      let pos = carrito.findIndex((prod) => prod.nombre === btn.id);
      if (pos > -1) {
        carrito.splice(pos, 1);
        localStorage.setItem("prodCarrito", JSON.stringify(carrito));
        mostrarCarrito();
        btnEliminar();
      }
    });
  });
}
btnEliminar();

function totalAPagar(){
  let precioTotal = document.querySelector("p#total");
  precioTotal.innerText = carrito.reduce((acc, producto)=> acc + producto.precio, 0).toFixed(2)
}

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
