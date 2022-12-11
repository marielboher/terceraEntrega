const vaciarCarrito = document.querySelector("#vaciarCarrito");
const tbody = document.querySelector("#tabla");
let mensaje = document.querySelector(".carrito-p");
let compra = new Compra();



const mostrarCarrito = () => {
  let tablaCarrito = "";

  if (carrito.length >= 0) {
  carrito.forEach((producto) =>
        (tablaCarrito += armarCarrito(producto)),
    );
    tbody.innerHTML = tablaCarrito;
  }
  if (carrito.length === 0) {
    let mostrarTotal = document.querySelector('#total');
    mostrarTotal.innerHTML = '0'
    mensaje.innerHTML = `
    <p>¡Aun no cargaste productos a tu carrito!</p>
    `;
  }
  compra.totalCompra()
};
mostrarCarrito()


const vaciarCarro = () => {
  vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  localStorage.clear();
  mostrarCarrito();
});
}
vaciarCarro()

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


//finalizacion de compra

  const btnCompraCarrito = document.querySelector("#continuarCompra")
  btnCompraCarrito.addEventListener("click", compra.finalizarCompra())

  
// function confirmarCompra(){
//   const aceptarCompra = document.querySelector('#aceptarCompra')
//   aceptarCompra.addEventListener('click', () => {
//   alerta(`'${resultado.nombre}' se agregó al carrito`, "#088170");
// })
// }